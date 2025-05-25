import { BuildingCost, THNumberAvailable } from "./buidings/defBuilding";
import { languageMap } from "./languages";

import { cannonCosts, cannonNumberAvailable } from "./buidings/defensiveBuildings/cannon";
import { archerTowerCosts, archerTowerNumberAvailable } from "./buidings/defensiveBuildings/archerTower";
import { mortarCosts, mortarNumberAvailable } from "./buidings/defensiveBuildings/mortar";
import { airDefenseCosts, airDefenseNumberAvailable } from "./buidings/defensiveBuildings/airDefense";
import { wizardTowerCosts, wizardTowerNumberAvailable } from "./buidings/defensiveBuildings/wizardTower";
import { airSweeperCosts, airSweeperNumberAvailable } from "./buidings/defensiveBuildings/airSweeper";
import { hiddenTeslaCosts, hiddenTeslaNumberAvailable } from "./buidings/defensiveBuildings/hiddenTesla";
import { bombTowerCosts, bombTowerNumberAvailable } from "./buidings/defensiveBuildings/bombTower";
import { infernoTowerCosts, infernoTowerNumberAvailable } from "./buidings/defensiveBuildings/infernoTower";
import { eagleArtilleryCosts, eagleArtilleryNumberAvailable } from "./buidings/defensiveBuildings/eagleArtillery";
import { scattershotCosts, scattershotNumberAvailable } from "./buidings/defensiveBuildings/scattershot";
import { buildersHutCosts, buildersHutNumberAvailable } from "./buidings/defensiveBuildings/buildersHut";
import { spellTowerCosts, spellTowerNumberAvailable } from "./buidings/defensiveBuildings/spellTower";
import { monolithCosts, monolithNumberAvailable } from "./buidings/defensiveBuildings/monolith";
import { multiArcherTowerCosts, multiArcherTowerNumberAvailable } from "./buidings/defensiveBuildings/multiArcherTower";
import { ricochetCannonCosts, ricochetCannonNumberAvailable } from "./buidings/defensiveBuildings/ricochetCannon";
import { multiGearTowerCosts, multiGearTowerNumberAvailable } from "./buidings/defensiveBuildings/multiGearTower";
import { firespitterCosts, firespitterNumberAvailable } from "./buidings/defensiveBuildings/firespitter";

import { townhallCosts, townhallNumberAvailable } from "./buidings/resourceBuildings/townhall";
import { bombCosts, bombNumberAvailable } from "./buidings/traps/bomb";
import { springTrapCosts, springTrapNumberAvailable } from "./buidings/traps/springTrap";
import { giantBombCosts, giantBombNumberAvailable } from "./buidings/traps/giantBomb";
import { airBombCosts, airBombNumberAvailable } from "./buidings/traps/airBomb";
import { seekingAirMineCosts, seekingAirMineNumberAvailable } from "./buidings/traps/seekingAirMine";
import { skeltonTrapCosts, skeltonTrapNumberAvailable } from "./buidings/traps/skeltonTrap";
import { tornadoTrapCosts, tornadoTrapNumberAvailable } from "./buidings/traps/tornadoTrap";

// 建築物のコスト
export const buildingCosts: Record<string, BuildingCost[]> = {
    /* defensiveBuildings */
    cannon: cannonCosts,
    archerTower: archerTowerCosts,
    mortar: mortarCosts,
    airDefense: airDefenseCosts,
    wizardTower: wizardTowerCosts,
    airSweeper: airSweeperCosts,
    hiddenTesla: hiddenTeslaCosts,
    bombTower: bombTowerCosts,
    infernoTower: infernoTowerCosts,
    eagleArtillery: eagleArtilleryCosts,
    scattershot: scattershotCosts,
    buildersHut: buildersHutCosts,
    spellTower: spellTowerCosts,
    monolith: monolithCosts,
    multiArcherTower: multiArcherTowerCosts,
    ricochetCannon: ricochetCannonCosts,
    multiGearTower: multiGearTowerCosts,
    firespitter: firespitterCosts,

    /* resourceBuildings */
    townhall: townhallCosts,

    /* traps */
    bomb: bombCosts,
    springTrap: springTrapCosts,
    giantBomb: giantBombCosts,
    airBomb: airBombCosts,
    seekingAirMine: seekingAirMineCosts,
    skeltonTrap: skeltonTrapCosts,
    tornadoTrap: tornadoTrapCosts,
};

// 建築物の設置可能数
export const buildingNumberAvailable: Record<string, THNumberAvailable[]> = {
    /* defensiveBuildings */
    cannon: cannonNumberAvailable,
    archerTower: archerTowerNumberAvailable,
    mortar: mortarNumberAvailable,
    airDefense: airDefenseNumberAvailable,
    wizardTower: wizardTowerNumberAvailable,
    airSweeper: airSweeperNumberAvailable,
    hiddenTesla: hiddenTeslaNumberAvailable,
    bombTower: bombTowerNumberAvailable,
    infernoTower: infernoTowerNumberAvailable,
    eagleArtillery: eagleArtilleryNumberAvailable,
    scattershot: scattershotNumberAvailable,
    buildersHut: buildersHutNumberAvailable,
    spellTower: spellTowerNumberAvailable,
    monolith: monolithNumberAvailable,
    multiArcherTower: multiArcherTowerNumberAvailable,
    ricochetCannon: ricochetCannonNumberAvailable,
    multiGearTower: multiGearTowerNumberAvailable,
    firespitter: firespitterNumberAvailable,

    /* resourceBuildings */
    townhall: townhallNumberAvailable,

    /* traps */
    bomb: bombNumberAvailable,
    springTrap: springTrapNumberAvailable,
    giantBomb: giantBombNumberAvailable,
    airBomb: airBombNumberAvailable,
    seekingAirMine: seekingAirMineNumberAvailable,
    skeltonTrap: skeltonTrapNumberAvailable,
    tornadoTrap: tornadoTrapNumberAvailable,
};


// THLvごとの、設置可能な建築物を返す
export interface AvailableBuilding {
    buildingName: string,
    translatedBuildingName: string,
    costs: BuildingCost[],
    numberAvailable: number,
}
export const getAvailableBuildings = (thLevel: number): AvailableBuilding[] => {
    // コスト情報から、thLevelRequiredを満たす建物のBuildingCostを取得
    const nameAndCosts: {name: string, translatedName: string, costs: BuildingCost[]}[]
        = Object.entries(buildingCosts)
            .map(([buildingName, bldCosts]) => ({
                name: buildingName,
                translatedName: languageMap.hasOwnProperty(buildingName) ? languageMap[buildingName] : buildingName,
                costs: bldCosts.filter((bldCost) => bldCost.thLevelRequired <= thLevel),
            }))
            .filter((ac) => ac.costs.length > 0)
    ;
    
    
    // 設置可能数の情報を付加
    const retBuildings = nameAndCosts.map(({name, translatedName, costs}) => {
        // 設置可能数の情報は、thLevel-1のインデックスに格納されている
        const numberAvailable = buildingNumberAvailable[name][thLevel - 1].number;
        return {
            buildingName: name,
            translatedBuildingName: translatedName,
            costs: costs,
            numberAvailable: numberAvailable,
        };
    });

    return retBuildings;
};

// 指定した建築物を、指定したLvの１つ前からのコストを返す
export const getBuildingCost = (
    buildingName: string,
    lv: number
): BuildingCost => {
    const costs = buildingCosts[buildingName];
    if (costs.length < lv) {
        throw new Error(`Building cost for ${buildingName} at level ${lv} is not available`);
    }
    return costs[lv - 1];
};

