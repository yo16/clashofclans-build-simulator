/*
Tornado Trap トルネードトラップ
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	5秒	39	1,000,000	-	-	11	
2	6秒	47	2,000,000	1日	293	11	
3	7秒	55	2,500,000	2日	415	12	
*/
export const tornadoTrapCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 0,
        thLevelRequired: 11,
    },
    {// lv2
        cost: [{type: "Gold", value: 2000000},],
        timeHours: 1*24,
        thLevelRequired: 11,
    },
    {// lv3
        cost: [{type: "Gold", value: 2500000},],
        timeHours: 2*24,
        thLevelRequired: 12,
    },
];

/*
TH別設置上限数

タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	1	1	1	1	1	1	1
*/
export const tornadoTrapNumberAvailable: THNumberAvailable[] = [
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
    {number: 1},    // th11
    {number: 1},    // th12
    {number: 1},    // th13
    {number: 1},    // th14
    {number: 1},    // th15
    {number: 1},    // th16
    {number: 1},    // th17
];

