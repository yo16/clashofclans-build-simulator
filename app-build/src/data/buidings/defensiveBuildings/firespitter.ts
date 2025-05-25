/*
Firespitter 竜炎砲
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	399	46	4,500	22,500,000	15日	1,138	17	
2	425	49	5,000	23,000,000	16日	1,175	17	
*/
export const firespitterCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 22500000},],
        timeHours: 15*24,
        thLevelRequired: 17,
    },
    {// lv2
        cost: [{type: "Gold", value: 23000000},],
        timeHours: 16*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数

タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	1
*/
export const firespitterNumberAvailable: THNumberAvailable[] = [
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
    {number: 0},    // th15
    {number: 0},    // th16
    {number: 1},    // th17
];
