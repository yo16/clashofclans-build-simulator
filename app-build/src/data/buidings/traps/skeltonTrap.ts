/*
Skelton Trap スケルトントラップ
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	2	6,000	-	-	8	
2	3	250,000	5時間	134	8	
3	4	400,000	8時間	169	9	
4	5	1,000,000	12時間	207	10	
*/
export const skeltonTrapCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 6000},],
        timeHours: 0,
        thLevelRequired: 8,
    },
    {// lv2
        cost: [{type: "Gold", value: 250000},],
        timeHours: 5,
        thLevelRequired: 8,
    },
    {// lv3
        cost: [{type: "Gold", value: 400000},],
        timeHours: 8,
        thLevelRequired: 9,
    },
    {// lv4
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 12,
        thLevelRequired: 10,
    },
];

/*
TH別設置上限数

タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	2	2	3	3	3	3	4	4	4	4
*/
export const skeltonTrapNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 0},    // th7
    {number: 2},    // th8
    {number: 2},    // th9
    {number: 3},    // th10
    {number: 3},    // th11
    {number: 3},    // th12
    {number: 3},    // th13
    {number: 4},    // th14
    {number: 4},    // th15
    {number: 4},    // th16
    {number: 4},    // th17
];  

