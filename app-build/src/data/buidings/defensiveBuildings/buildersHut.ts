/*
Builder's Hut 武装化大工の小屋
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	-	-	-	-	250	-	-	0	1	
2	80	32	50	37.5	1,000	4,000,000	3日	509	14	
3	100	40	60	45	1,300	5,000,000	4日	587	14	
4	120	48	70	52.5	1,600	7,000,000	5日	657	14	
5	135	54	80	60	1,800	8,000,000	6日	720	15	
6	150	60	85	63.75	1,900	9,000,000	7日	777	16	
7	165	66	90	67.5	2,000	21,000,000	15.25日	1,147	17	
*/
export const buildersHutCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 0},],
        timeHours: 0,
        thLevelRequired: 1,
    },
    {// lv2
        cost: [{type: "Gold", value: 4000000},],
        timeHours: 3*24,
        thLevelRequired: 14,
    },
    {// lv3
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 4*24,
        thLevelRequired: 14,
    },
    {// lv4
        cost: [{type: "Gold", value: 7000000},],
        timeHours: 5*24,
        thLevelRequired: 14,
    },
    {// lv5
        cost: [{type: "Gold", value: 8000000},],
        timeHours: 6*24,
        thLevelRequired: 15,
    },
    {// lv6
        cost: [{type: "Gold", value: 9000000},],
        timeHours: 7*24,
        thLevelRequired: 16,
    },
    {// lv7
        cost: [{type: "Gold", value: 21000000},],
        timeHours: 15.25*24,
        thLevelRequired: 17,
    },
];


/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	-	5	5	5	5
*/
export const buildersHutNumberAvailable: THNumberAvailable[] = [
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
    {number: 5},    // th14
    {number: 5},    // th15
    {number: 5},    // th16
    {number: 5},    // th17
];
