"use client";

//import Cookies from "js-cookie";

import { BuildingStatus } from "../buildingsCommon";

const COOKIE_NAME = "buildingStatuses";

type CookieButtonProps = {
    curThLv: number,
    buildingStatuses: BuildingStatus[],
    setBuildingStatuses: (buildingStatuses: BuildingStatus[]) => void,
};

export const CookieButton = ({
    curThLv,
    buildingStatuses,
    setBuildingStatuses: parentSetBuildingStatuses,
}: CookieButtonProps) => {
    const handleSave = () => {
        // 保存するデータを作成
        const data = {
            thLv: curThLv,
            buildingStatuses: buildingStatuses,
        };
        const jsonData = JSON.stringify(data);

        // 保存
        //Cookies.set(COOKIE_NAME, jsonData);
        localStorage.setItem(COOKIE_NAME, jsonData);
    }
    const handleLoad = () => {
        //const savedBuildingStatuses = Cookies.get(COOKIE_NAME);
        const savedBuildingStatuses = localStorage.getItem(COOKIE_NAME);
        if (savedBuildingStatuses) {
            // パース
            const data = JSON.parse(savedBuildingStatuses);

            // thLvが、現在と一致しない場合は、その旨を表示して終了
            if (data.thLv !== curThLv) {
                alert(`保存したデータのTHLv(${data.thLv})が、現在のTHLv(${curThLv})と一致しません。`);
                return;
            }

            // データを設定
            parentSetBuildingStatuses(data.buildingStatuses);
        }
    }
    return (
        <div
            style={{
                padding: "10px",
            }}
        >
            <button
                onClick={handleSave}
            >
                保存
            </button>
            <button
                onClick={handleLoad}
            >
                読み込み
            </button>
        </div>
    )
}