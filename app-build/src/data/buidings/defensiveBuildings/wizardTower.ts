/*
Wizard Tower ウィザードの塔
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	11	14.3	620	100,000	1時間	60	5	
2	13	16.9	650	150,000	1時間 30分	73	5	
3	16	20.8	680	250,000	4時間	120	6	
4	20	26	730	400,000	8時間	169	7	
5	24	31.2	840	550,000	10時間	189	8	
6	32	41.6	960	660,000	12時間	207	8	
7	40	52	1,200	1,000,000	18時間	254	9	
8	45	58.5	1,440	1,100,000	20時間	268	10	
9	50	65	1,600	1,300,000	1日	293	10	
10	62	80.6	1,900	2,000,000	1.25日	328	11	
11	70	91	2,120	2,500,000	1.5日	360	12	
12	78	101.4	2,240	2,600,000	1.75日	388	13	
13	84	109.2	2,500	3,000,000	2日	415	13	
14	90	117	2,800	4,500,000	3日	509	14	
15	95	123.5	3,000	5,500,000	4日	587	15	
16	102	132.6	3,150	8,000,000	5.5日	689	16	
17	110	143	3,300	20,000,000	14.75日	1,128	17	
*/
export const wizardTowerCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 100000},],
        timeHours: 1,
        thLevelRequired: 5,
    },
    {// lv2
        cost: [{type: "Gold", value: 150000},],
        timeHours: 1.5,
        thLevelRequired: 5,
    },
    {// lv3
        cost: [{type: "Gold", value: 250000},],
        timeHours: 4,
        thLevelRequired: 6,
    },
    {// lv4
        cost: [{type: "Gold", value: 400000},],
        timeHours: 8,
        thLevelRequired: 7,
    },
    {// lv5
        cost: [{type: "Gold", value: 550000},],
        timeHours: 10,
        thLevelRequired: 8,
    },
    {// lv6
        cost: [{type: "Gold", value: 660000},],
        timeHours: 12,
        thLevelRequired: 8,
    },
    {// lv7
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 18,
        thLevelRequired: 9,
    },
    {// lv8
        cost: [{type: "Gold", value: 1100000},],
        timeHours: 20,
        thLevelRequired: 10,
    },
    {// lv9
        cost: [{type: "Gold", value: 1300000},],
        timeHours: 1*24,
        thLevelRequired: 10,
    },
    {// lv10
        cost: [{type: "Gold", value: 2000000},],
        timeHours: 1.25*24,
        thLevelRequired: 11,
    },
    {// lv11
        cost: [{type: "Gold", value: 2500000},],
        timeHours: 1.5*24,
        thLevelRequired: 12,
    },
    {// lv12
        cost: [{type: "Gold", value: 2600000},],
        timeHours: 1.75*24,
        thLevelRequired: 13,
    },
    {// lv13
        cost: [{type: "Gold", value: 3000000},],
        timeHours: 2*24,
        thLevelRequired: 13,
    },
    {// lv14
        cost: [{type: "Gold", value: 4500000},],
        timeHours: 3*24,
        thLevelRequired: 14,
    },
    {// lv15
        cost: [{type: "Gold", value: 5500000},],
        timeHours: 4*24,
        thLevelRequired: 15,
    },
    {// lv16
        cost: [{type: "Gold", value: 8000000},],
        timeHours: 5.5*24,
        thLevelRequired: 16,
    },
    {// lv17
        cost: [{type: "Gold", value: 20000000},],
        timeHours: 14.75*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	1	2	2	3	4	4	5	5	5	5	5	5	5
*/
export const wizardTowerNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 1},    // th5
    {number: 2},    // th6
    {number: 2},    // th7
    {number: 3},    // th8
    {number: 4},    // th9
    {number: 4},    // th10
    {number: 5},    // th11
    {number: 5},    // th12
    {number: 5},    // th13
    {number: 5},    // th14
    {number: 5},    // th15
    {number: 5},    // th16
    {number: 5},    // th17
];
