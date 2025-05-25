/*
Spell Tower 呪文タワー
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	レイジ	2,500	9,000,000	7日	777	15	
2	ポイズン	2,800	11,000,000	8日	831	15	
3	インビジブル	3,100	12,000,000	9日	881	15	
*/
export const spellTowerCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 9000000},],
        timeHours: 7*24,
        thLevelRequired: 15,
    },
    {// lv2
        cost: [{type: "Gold", value: 11000000},],
        timeHours: 8*24,
        thLevelRequired: 15,
    },
    {// lv3
        cost: [{type: "Gold", value: 12000000},],
        timeHours: 9*24,
        thLevelRequired: 15,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	-	-	2	2	2
*/
export const spellTowerNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 0},    // th7
    {number: 0},    // th8
    {number: 0},    // th9
    {number: 0},    // th10
    {number: 0},    // th11
    {number: 0},    // th12
    {number: 0},    // th13
    {number: 0},    // th14
    {number: 2},    // th15
    {number: 2},    // th16
    {number: 2},    // th17
];
