/*
Giga Bomb ギガ爆弾
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	1,100	5,000,000	-	-	17	
2	1,200	10,000,000	8日	831	17	
3	1,300	15,000,000	10日	929	17	
*/
export const gigaBombCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 0,
        thLevelRequired: 17,
    },
    {// lv2
        cost: [{type: "Gold", value: 10000000},],
        timeHours: 8*24,
        thLevelRequired: 17,
    },
    {// lv3
        cost: [{type: "Gold", value: 15000000},],
        timeHours: 10*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数

タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	1
*/
export const gigaBombNumberAvailable: THNumberAvailable[] = [
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
