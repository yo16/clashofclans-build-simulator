/*
Ricochet Cannon 跳弾大砲
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	360	288	5,400	12,000,000	9日	881	16	
2	390	312	5,700	13,000,000	10日	929	16	
3	405	324	6,000	23,000,000	15.5日	1,157	17	
*/
export const ricochetCannonCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 12000000},],
        timeHours: 9*24,
        thLevelRequired: 16,
    },
    {// lv2
        cost: [{type: "Gold", value: 13000000},],
        timeHours: 10*24,
        thLevelRequired: 16,
    },
    {// lv3
        cost: [{type: "Gold", value: 23000000},],
        timeHours: 15.5*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数

タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	2	3
*/
export const ricochetCannonNumberAvailable: THNumberAvailable[] = [
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
    {number: 2},    // th16
    {number: 3},    // th17
];
