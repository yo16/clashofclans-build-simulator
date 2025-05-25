/*
Seeking Air Mine ホーミング対空地雷
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	1,500	12,000	-	-	7	
2	1,800	600,000	12時間	207	9	
3	2,100	1,200,000	1日	293	10	
4	2,500	2,500,000	2日	415	13	
5	2,800	5,000,000	4日	587	15	
6	3,000	6,500,000	5日	657	16	
7	3,200	14,000,000	10日	929	17	
*/
export const seekingAirMineCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 1500},],
        timeHours: 0,
        thLevelRequired: 7,
    },
    {// lv2
        cost: [{type: "Gold", value: 1800},],
        timeHours: 12,
        thLevelRequired: 9,
    },
    {// lv3
        cost: [{type: "Gold", value: 2100},],
        timeHours: 1*24,
        thLevelRequired: 10,
    },
    {// lv4
        cost: [{type: "Gold", value: 2500},],
        timeHours: 2*24,
        thLevelRequired: 13,
    },
    {// lv5
        cost: [{type: "Gold", value: 2800},],
        timeHours: 4*24,
        thLevelRequired: 15,
    },
    {// lv6
        cost: [{type: "Gold", value: 3000},],
        timeHours: 5*24,
        thLevelRequired: 16,
    },
    {// lv7
        cost: [{type: "Gold", value: 3200},],
        timeHours: 10*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数

タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	1	2	4	5	5	6	7	8	8	8	9
*/
export const seekingAirMineNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 1},    // th7
    {number: 2},    // th8
    {number: 4},    // th9
    {number: 5},    // th10
    {number: 5},    // th11
    {number: 6},    // th12
    {number: 7},    // th13
    {number: 8},    // th14
    {number: 8},    // th15
    {number: 8},    // th16
    {number: 9},    // th17
];