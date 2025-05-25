"use client";

import React from "react";
import { BuildingStatus } from "../buildingsCommon";
import { CookieButton } from "./CookieButton";

type TargetLvSetterProps = {
    thLv: number,
    buildingStatuses: BuildingStatus[],
    setBuildingStatuses: (buildingStatuses: BuildingStatus[]) => void,
};
export const TargetLvSetter = ({
    thLv,
    buildingStatuses,
    setBuildingStatuses: parentSetBuildingStatuses,
}: TargetLvSetterProps) => {

    // 現在のLvを変更したとき
    const handleCurrentLvChange = (
        buildingName: string,
        unitId: number,
        currentLv: number
    ) => {
        // BuildingStatusの中から、buildingNameを探し、更新
        const nextBs = buildingStatuses.map(bs => {
            if (bs.name === buildingName) {
                return {
                    ...bs,
                    units: bs.units.map(unit => {
                        if (unit.id === unitId) {
                            // 目標Lv＜現在Lvなら、目標Lvも現在Lvと同じ値に更新
                            const nextTargetLv
                                = (unit.targetLv < currentLv)
                                    ? currentLv  // 更新
                                    : unit.targetLv
                            ;

                            return {
                                ...unit,
                                currentLv,
                                targetLv: nextTargetLv,
                            }
                        }
                        return unit;
                    })
                }
            }
            return bs;
        })
        parentSetBuildingStatuses(nextBs);
    }

    
    // 目標のLvを変更したとき
    const handleTargetLvChange = (
        buildingName: string,
        unitId: number,
        targetLv: number
    ) => {
        // BuildingStatusの中から、buildingNameを探し、更新
        const nextBs = buildingStatuses.map(bs => {
            if (bs.name === buildingName) {
                return {
                    ...bs,
                    units: bs.units.map(unit => {
                        if (unit.id === unitId) {
                            // 目標Lv＜現在Lv なら、現在Lvも目標Lvと同じ値に更新
                            const nextCurrentLv
                                = (targetLv < unit.currentLv)
                                    ? targetLv  // 更新
                                    : unit.currentLv
                            ;

                            return {
                                ...unit,
                                currentLv: nextCurrentLv,
                                targetLv,
                            }
                        }
                        return unit;
                    })
                }
            }
            return bs;
        })
        parentSetBuildingStatuses(nextBs);
    }
    

    // 最大化ボタンをクリックしたとき
    const handleClickMaximize = () => {
        // すべての目標Lvを最大にする
        const nextBs = buildingStatuses.map(bs => {
            return {
                ...bs,
                units: bs.units.map(unit => ({
                    ...unit,
                    targetLv: bs.maxLv,
                })),
            }
        })
        parentSetBuildingStatuses(nextBs);
    }

    return (
        <div>
            <div>
                <div
                    className="table-grid"
                >
                    <div className="header">建築物</div>
                    <div className="header">#</div>
                    <div className="header">現在のLv</div>
                    <div className="header">
                        目標のLv<br />
                        <button
                            onClick={handleClickMaximize}
                        >
                            Max
                        </button>
                    </div>

                    {buildingStatuses.map((buildingStatus: BuildingStatus, i: number) => (
                        buildingStatus.units.map((unit, j) => (
                            <React.Fragment
                                key={`unit-${i}-${j}`}
                            >
                                {j === 0 && (
                                    <div
                                        className="category"
                                        style={{
                                            gridRow: `span ${buildingStatus.units.length}`,
                                        }}
                                    >
                                        {buildingStatus.nameTranslated}
                                    </div>
                                )}
                                <div className="item">
                                    {unit.id}
                                </div>
                                <div className="item">
                                    <select
                                        value={unit.currentLv}
                                        onChange={(e) => {
                                            handleCurrentLvChange(
                                                buildingStatus.name,
                                                unit.id,
                                                Number(e.target.value)
                                            )
                                        }}
                                    >
                                        {Array.from({length: buildingStatus.maxLv}, (_, k) => (
                                            <option
                                                key={`currentLv-${i}-${j}-${k}`}
                                                value={buildingStatus.maxLv - k}
                                            >
                                                {buildingStatus.maxLv - k}
                                            </option>
                                        ))}
                                        <option value={0}>なし</option>
                                    </select>
                                </div>
                                <div className="item">
                                    <select
                                        value={unit.targetLv}
                                        onChange={(e) => {
                                            handleTargetLvChange(
                                                buildingStatus.name,
                                                unit.id,
                                                Number(e.target.value)
                                            )
                                        }}
                                    >
                                        {Array.from({length: buildingStatus.maxLv}, (_, k) => (
                                            <option
                                                key={`targetLv-${i}-${j}-${k}`}
                                                value={buildingStatus.maxLv - k}
                                            >
                                                {buildingStatus.maxLv - k}
                                            </option>
                                        ))}
                                        <option value={0}>なし</option>
                                    </select>
                                </div>
                            </React.Fragment>
                        ))
                    ))}
                </div>
                <CookieButton
                    curThLv={thLv}
                    buildingStatuses={buildingStatuses}
                    setBuildingStatuses={parentSetBuildingStatuses}
                />
            </div>
        </div>
    )
}

