/*
Monolith モノリス
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	150	225	11%	4,747	200,000	7日	777	15	
2	175	262.5	12%	5,050	250,000	8日	831	15	
3	193	289.5	13%	5,353	260,000	9日	881	16	
4	209	313.5	14%	5,656	300,000	15.75日	1,166	17	
*/
export const monolithCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 200000},],
        timeHours: 7*24,
        thLevelRequired: 15,
    },
    {// lv2
        cost: [{type: "Gold", value: 250000},],
        timeHours: 8*24,
        thLevelRequired: 15,
    },
    {// lv3
        cost: [{type: "Gold", value: 260000},],
        timeHours: 9*24,
        thLevelRequired: 16,
    },
    {// lv4
        cost: [{type: "Gold", value: 300000},],
        timeHours: 15.75*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	-	-	1	1	1
*/
export const monolithNumberAvailable: THNumberAvailable[] = [
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
    {number: 1},    // th14
    {number: 1},    // th15
    {number: 1},    // th16
    {number: 1},    // th17
];