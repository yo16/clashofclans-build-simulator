/*
Eagle Artillery イーグル砲
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	225	67.5	20	4,000	5,000,000	4日	587	11	
2	250	75	25	4,400	6,000,000	5日	657	11	
3	275	82.5	30	4,800	9,000,000	7日	777	12	
4	350	105	35	5,200	10,000,000	8日	831	13	
5	425	127.5	40	5,600	12,000,000	9日	881	14	
6	475	142.5	45	5,900	13,000,000	9.5日	905	15	
7	525	157.5	50	6,200	14,000,000	10日	929	16
*/

export const eagleArtilleryCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 4*24,
        thLevelRequired: 11,
    },
    {// lv2
        cost: [{type: "Gold", value: 6000000},],
        timeHours: 5*24,
        thLevelRequired: 11,
    },
    {// lv3
        cost: [{type: "Gold", value: 9000000},],
        timeHours: 7*24,
        thLevelRequired: 12,
    },
    {// lv4
        cost: [{type: "Gold", value: 10000000},],
        timeHours: 8*24,
        thLevelRequired: 13,
    },
    {// lv5
        cost: [{type: "Gold", value: 12000000},],
        timeHours: 9*24,
        thLevelRequired: 14,
    },
    {// lv6
        cost: [{type: "Gold", value: 13000000},],
        timeHours: 9.5*24,
        thLevelRequired: 15,
    },
    {// lv7
        cost: [{type: "Gold", value: 14000000},],
        timeHours: 10*24,
        thLevelRequired: 16,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	1	1	1	1	1	1	0
*/
export const eagleArtilleryNumberAvailable: THNumberAvailable[] = [
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
    {number: 0},    // th17
];

