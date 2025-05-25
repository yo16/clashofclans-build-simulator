"use client";

import React, { useState, useEffect } from "react";

import { TownHallSelector } from "./components/TownHallSelector";
import { TargetLvSetter } from "./components/TargetLvSetter";
import { ReminingWorkSuummary } from "./components/ReminingWorkSuummary";

import { getAvailableBuildings } from "@/data/buildingCosts";
import { languageMap } from "@/data/languages";
import { BuildingStatus } from "./buildingsCommon";

import "./buildings.css";



export default function BuildMain() {
    const [th, setTh] = useState<number>(1);
    const [buildingStatuses, setBuildingStatuses] = useState<BuildingStatus[]>([]);

    const [showTownHallSelector, setShowTownHallSelector] = useState<boolean>(true);
    const [showTargetLvSetter, setShowTargetLvSetter] = useState<boolean>(true);
    const [showReminingWorkSummary, setShowReminingWorkSummary] = useState<boolean>(true);

    useEffect(() => {
        const newBs = createBuildingStatuses(th);
        setBuildingStatuses(newBs);
    }, [th]);


    // 建築情報の定義から、建築物の初期状態を作る
    const createBuildingStatuses = (curThLv: number): BuildingStatus[] => {
        // 建築物の情報を取得
        const availableBuildings = getAvailableBuildings(curThLv);

        // statusを作る
        const bs: BuildingStatus[] = availableBuildings.map((ab) => {
            // 建築できる数
            const numberAvailable = ab.numberAvailable;

            // 現在のTHで到達できる、建築物の最大Lv
            const maxLv = ab.costs.length;

            // １つ前のTHで到達できる、建築物の最大Lv
            const prevThLv = curThLv - 1;
            const prevMaxLv = ab.costs
                .reduce((acc, cost, index) => {
                    // １つ前のTHで作れるなら、そのindexを返す
                    if (cost.thLevelRequired <= prevThLv) {
                        return index;
                    }
                    // 作れないなら、更新せずそのまま返す
                    return acc;
                }, 0) + 1;  // index+1がレベルなので、+1して返す
            // 今の建物のLv
            // ★ToDo: Lv1から作るときもあるから、これではダメ
            //         TH1の考慮と、数が増えた時に増えた分は0にすべき
            const currentLv = prevMaxLv;

            return {
                name: ab.buildingName,
                nameTranslated: languageMap.hasOwnProperty(ab.buildingName)
                    ? languageMap[ab.buildingName]
                    : ab.buildingName,
                maxLv,
                units: Array.from({length: numberAvailable}, (_, i) => ({
                    id: i + 1,
                    // １つ前のTHLvのmaxLv
                    currentLv,
                    // 現在のTHLvのmaxLv
                    // 初期は、１つ前のTHLvのmaxLv
                    targetLv: prevMaxLv,
                })),
            };
        });
        return bs;
    };

    return (
        <div
            className="building-page"
        >
            <h1>Building Simulator</h1>

            <div>
                <h2
                    onClick={() => setShowTownHallSelector(!showTownHallSelector)}
                >
                    Town Hall
                </h2>
                <div
                    style={{
                        display: showTownHallSelector ? "block" : "none",
                    }}
                >
                    <TownHallSelector
                        th={th}
                        handleThChange={setTh}
                    />
                </div>
                
                <h2
                    onClick={() => setShowTargetLvSetter(!showTargetLvSetter)}
                >
                    現在の建築物と目標
                </h2>
                <div
                    style={{
                        display: showTargetLvSetter ? "block" : "none",
                    }}
                >
                    <TargetLvSetter
                        thLv={th}
                        buildingStatuses={buildingStatuses}
                        setBuildingStatuses={setBuildingStatuses}
                    />
                </div>

                <h2
                    onClick={() => setShowReminingWorkSummary(!showReminingWorkSummary)}
                >
                    残工事
                </h2>
                <div
                    style={{
                        display: showReminingWorkSummary ? "block" : "none",
                    }}
                >
                    <ReminingWorkSuummary
                        buildingStatuses={buildingStatuses}
                    />
                </div>
            </div>
        </div>
    )
}