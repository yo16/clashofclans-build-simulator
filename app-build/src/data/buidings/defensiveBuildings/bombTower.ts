/*
Bomb Tower ボムタワー
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	24	26.4	150	650	700,000	12時間	207	8	
2	28	30.8	180	700	1,000,000	18時間	254	8	
3	32	35.2	220	750	1,300,000	1日	293	9	
4	40	44	260	850	1,800,000	1.5日	360	10	
5	48	52.8	300	1,050	1,900,000	1.75日	388	11	
6	56	61.6	350	1,300	3,000,000	2日	415	11	
7	64	70.4	400	1,600	4,000,000	3日	509	12	
8	72	79.2	450	1,900	5,000,000	4日	587	13	
9	84	92.4	500	2,300	6,000,000	4.5日	623	14	
10	94	103.4	550	2,500	7,000,000	5日	657	15	
11	104	114.4	600	2,700	8,500,000	6.5日	749	16	
12	114	125.4	650	2,900	20,000,000	15日	1,099	17	
*/
export const bombTowerCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 700000},],
        timeHours: 12,
        thLevelRequired: 8,
    },
    {// lv2
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 18,
        thLevelRequired: 8,
    },
    {// lv3
        cost: [{type: "Gold", value: 1300000},],
        timeHours: 1*24,
        thLevelRequired: 9,
    },
    {// lv4
        cost: [{type: "Gold", value: 1800000},],
        timeHours: 1.5*24,
        thLevelRequired: 10,
    },
    {// lv5
        cost: [{type: "Gold", value: 1900000},],
        timeHours: 1.75*24,
        thLevelRequired: 11,
    },
    {// lv6
        cost: [{type: "Gold", value: 3000000},],
        timeHours: 2*24,
        thLevelRequired: 11,
    },
    {// lv7
        cost: [{type: "Gold", value: 4000000},],
        timeHours: 3*24,
        thLevelRequired: 12,
    },
    {// lv8
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 4*24,
        thLevelRequired: 13,
    },
    {// lv9
        cost: [{type: "Gold", value: 6000000},],
        timeHours: 4.5*24,
        thLevelRequired: 14,
    },
    {// lv10
        cost: [{type: "Gold", value: 7000000},],
        timeHours: 5*24,
        thLevelRequired: 15,
    },
    {// lv11
        cost: [{type: "Gold", value: 8500000},],
        timeHours: 6.5*24,
        thLevelRequired: 16,
    },
    {// lv12
        cost: [{type: "Gold", value: 20000000},],
        timeHours: 15*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	1	1	2	2	2	2	2	2	2	2
*/
export const bombTowerNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 0},    // th7
    {number: 1},    // th8
    {number: 1},    // th9
    {number: 2},    // th10
    {number: 2},    // th11
    {number: 2},    // th12
    {number: 2},    // th13
    {number: 2},    // th14
    {number: 2},    // th15
    {number: 2},    // th16
    {number: 2},    // th17
];
