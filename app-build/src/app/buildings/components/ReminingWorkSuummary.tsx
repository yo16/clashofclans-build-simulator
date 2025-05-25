"use client";

import { useState, useEffect } from "react";

import { BuildingStatus } from "../buildingsCommon";
import { BuildingCost } from "@/data/buidings/defBuilding";
import { getBuildingCost } from "@/data/buildingCosts";

type Task = {
    name: string,
    nameTranslated: string,
    unitId: number,
    unitStepId: number,   // １つの建築物を複数Lv上げるときに区別するID
    currentLv: number,
    targetLv: number,
    cost: BuildingCost,
}
type WorkersTasks = {
    tasks: Task[],
    workEndTime: number,    // n時間後
}

type ReminingWorkSuummaryProps = {
    buildingStatuses: BuildingStatus[],
}

export const ReminingWorkSuummary = ({
    buildingStatuses,
}: ReminingWorkSuummaryProps) => {
    const [workerCount, setWorkerCount] = useState<number>(5);
    const [workersTasks, setWorkersTasks] = useState<WorkersTasks[]>([]);

    useEffect(() => {
        // タスクを設定
        const newTasks = createTasks(buildingStatuses);
        console.log({newTasks});


        // １つのタスクの評価時間を計算する
        // その後の合計時間も合わせて評価するため、後続タスクがある場合は、Lvが低くても評価値は高くなる
        const calcEvaluatedTime = (task: Task): number => {
            // newTasksの中で、taskと同じunitIdのタスクで、unitStepIdが自分以上のものは全て足す
            const sameUnitTasks = newTasks.filter((t) => t.name === task.name && t.unitId === task.unitId && t.unitStepId >= task.unitStepId);
            return sameUnitTasks.reduce((sum, t) => sum + t.cost.timeHours, 0);
        }
        // タスクを、unit単位で合計した時間のかかる順に並び替える
        const sortedTasks = newTasks.sort((a, b) => {
            return calcEvaluatedTime(b) - calcEvaluatedTime(a);
        });
        console.log({sortedTasks});
        for (const task of sortedTasks) {
            console.log(`${task.nameTranslated}(#${task.unitId}-${task.unitStepId}`, calcEvaluatedTime(task));
        }
        

        // タスクを割り当てる
        const newWorkersTasks = assignTasksToWorkers(workerCount, sortedTasks);
        setWorkersTasks(newWorkersTasks);
    }, [buildingStatuses, workerCount]);


    // タスクを大工へ割り当てる
    const assignTasksToWorkers = (workerCount: number, newTasks: Task[]): WorkersTasks[] => {
        // 大工の数分の配列を作成
        const workersTasks: WorkersTasks[] = Array.from({length: workerCount}, (_) => ({
            tasks: [],
            workEndTime: 0,
        }));

        // タスクを大工へ割り当てる
        newTasks.forEach((task) => {
            // 大工の中から、workEndTimeが一番小さな大工のindexを探す
            const workerIndex = workersTasks.reduce((minWorkerIndex, worker, index) => {
                if (worker.workEndTime < workersTasks[minWorkerIndex].workEndTime) {
                    return index;
                }
                return minWorkerIndex;
            }, 0);

            // 大工にタスクを割り当てる
            workersTasks[workerIndex].tasks.push(task);

            // 大工のworkEndTimeを更新
            workersTasks[workerIndex].workEndTime += task.cost.timeHours;
        });

        return workersTasks;
    }

    return (
        <div>
            大工の数: <select
                value={workerCount}
                onChange={(e) => setWorkerCount(Number(e.target.value))}
            >
                {Array.from({length: 6}, (_, i) => (
                    <option key={`worker-${i}`} value={i+1}>{i+1}</option>
                ))}
            </select>

            <div>
                {workersTasks.map((workerTask, index) => (
                    <div
                        key={`worker-${index}`}
                    >
                        <h3>大工 #{index+1}</h3>
                        <div>
                            {workerTask.tasks.map((task) => (
                                <div key={`worker_task-${task.name}-${task.unitId}-${task.unitStepId}`}>
                                    {task.nameTranslated}(#{task.unitId}-{task.unitStepId})
                                    {task.currentLv}-&gt;{task.targetLv}/
                                    {task.cost.cost.map((cost) => (
                                        `${cost.type}:${cost.value}`
                                    ))}/
                                    {task.cost.timeHours}h
                                </div>
                            ))}
                            合計: {workerTask.workEndTime}h
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// BuildingStatusから、Taskを作る
const createTasks = (buildingStatuses: BuildingStatus[]): Task[] => {
    const tasks: Task[] = [];

    buildingStatuses.forEach((buildingStatus) => {
        buildingStatus.units.forEach((unit) => {
            // currentLvからTargetLvまで、1Lvずつタスクを作成する
            let unitStepId = 1;
            for (let lv = unit.currentLv; lv < unit.targetLv; lv++) {
                const newTask: Task = {
                    unitId: unit.id,
                    unitStepId: unitStepId++,
                    name: buildingStatus.name,
                    nameTranslated: buildingStatus.nameTranslated,
                    currentLv: lv,
                    targetLv: lv + 1,
                    cost: getBuildingCost(
                        buildingStatus.name,
                        lv + 1,
                    ),
                };
                tasks.push(newTask);
            }
        });
    });
    return tasks;
}
