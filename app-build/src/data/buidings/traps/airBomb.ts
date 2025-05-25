/*
Air Bomb 対空爆弾
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	100	4,000	-	-	5	
2	120	20,000	30分	42	5	
3	144	75,000	1時間	60	7	
4	173	300,000	4時間	120	9	
5	208	550,000	8時間	169	11	
6	232	800,000	12時間	207	12	
7	252	1,000,000	18時間	254	13	
8	280	1,200,000	1日	293	13	
9	325	2,000,000	1.5日	360	14	
10	350	3,000,000	2日	415	15	
11	375	5,000,000	3日	509	16	
12	400	11,000,000	8.5日	856	17	
*/
export const airBombCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 4000},],
        timeHours: 0,
        thLevelRequired: 5,
    },
    {// lv2
        cost: [{type: "Gold", value: 20000},],
        timeHours: 30/60,
        thLevelRequired: 5,
    },
    {// lv3
        cost: [{type: "Gold", value: 75000},],
        timeHours: 1,
        thLevelRequired: 7,
    },
    {// lv4
        cost: [{type: "Gold", value: 300000},],
        timeHours: 4,
        thLevelRequired: 9,
    },
    {// lv5
        cost: [{type: "Gold", value: 550000},],
        timeHours: 8,
        thLevelRequired: 11,
    },
    {// lv6
        cost: [{type: "Gold", value: 800000},],
        timeHours: 12,
        thLevelRequired: 12,
    },
    {// lv7
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 18,
        thLevelRequired: 13,
    },
    {// lv8
        cost: [{type: "Gold", value: 1200000},],
        timeHours: 1*24,
        thLevelRequired: 13,
    },
    {// lv9
        cost: [{type: "Gold", value: 2000000},],
        timeHours: 1.5*24,
        thLevelRequired: 14,
    },
    {// lv10
        cost: [{type: "Gold", value: 3000000},],
        timeHours: 2*24,
        thLevelRequired: 15,
    },
    {// lv11
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 3*24,
        thLevelRequired: 16,
    },
    {// lv12
        cost: [{type: "Gold", value: 11000000},],
        timeHours: 8.5*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	2	2	2	4	4	5	5	6	6	7	7	7	7
*/
export const airBombNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 2},    // th5
    {number: 2},    // th6
    {number: 2},    // th7
    {number: 4},    // th8
    {number: 4},    // th9
    {number: 5},    // th10
    {number: 5},    // th11
    {number: 6},    // th12
    {number: 6},    // th13
    {number: 7},    // th14
    {number: 7},    // th15
    {number: 7},    // th16
    {number: 7},    // th17
];
