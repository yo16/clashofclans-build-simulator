/*
Spring Trap ばねトラップ
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	10	2,000	-	-	4	
2	12	130,000	2時間	84	7	
3	14	240,000	4時間	120	8	
4	16	350,000	6時間	146	9	
5	18	800,000	12時間	207	10	
*/
export const springTrapCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 2000},],
        timeHours: 0,
        thLevelRequired: 4,
    },
    {// lv2
        cost: [{type: "Gold", value: 130000},],
        timeHours: 2,
        thLevelRequired: 7,
    },
    {// lv3
        cost: [{type: "Gold", value: 240000},],
        timeHours: 4,
        thLevelRequired: 8,
    },
    {// lv4
        cost: [{type: "Gold", value: 350000},],
        timeHours: 6,
        thLevelRequired: 9,
    },
    {// lv5
        cost: [{type: "Gold", value: 800000},],
        timeHours: 12,
        thLevelRequired: 10,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	2	2	4	4	6	6	6	6	8	9	9	9	9	9
*/
export const springTrapNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 2},    // th4
    {number: 2},    // th5
    {number: 4},    // th6
    {number: 4},    // th7
    {number: 6},    // th8
    {number: 6},    // th9
    {number: 6},    // th10
    {number: 6},    // th11
    {number: 8},    // th12
    {number: 9},    // th13
    {number: 9},    // th14
    {number: 9},    // th15
    {number: 9},    // th16
    {number: 9},    // th17
];
