/*
Mortar 迫撃砲
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	4	20	400	5,000	30分	42	3	
2	5	25	450	25,000	1時間	60	4	
3	6	30	500	90,000	2時間	84	5	
4	7	35	550	180,000	3時間	103	6	
5	9	45	600	300,000	6時間	146	7	
6	11	55	650	500,000	8時間	169	8	
7	15	75	700	900,000	12時間	207	9	
8	20	100	800	1,200,000	18時間	254	10	
9	25	125	950	1,600,000	20時間	268	11	
10	30	150	1,100	1,800,000	1日	293	11	
11	35	175	1,300	2,300,000	1.25日	328	12	
12	38	190	1,500	2,400,000	1.5日	360	12	
13	42	210	1,700	2,800,000	2日	415	13	
14	48	240	1,950	4,300,000	2.5日	464	14	
15	54	270	2,150	5,000,000	3.5日	549	15	
16	60	300	2,300	7,000,000	5日	657	16	
17	66	330	2,450	19,500,000	14.5日	1,119	17	
*/
export const mortarCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 5000},],
        timeHours: 30/60,
        thLevelRequired: 3,
    },
    {// lv2
        cost: [{type: "Gold", value: 25000},],
        timeHours: 1,
        thLevelRequired: 4,
    },
    {// lv3
        cost: [{type: "Gold", value: 90000},],
        timeHours: 2,
        thLevelRequired: 5,
    },
    {// lv4
        cost: [{type: "Gold", value: 180000},],
        timeHours: 3,
        thLevelRequired: 6,
    },
    {// lv5
        cost: [{type: "Gold", value: 300000},],
        timeHours: 6,
        thLevelRequired: 7,
    },
    {// lv6
        cost: [{type: "Gold", value: 500000},],
        timeHours: 8,
        thLevelRequired: 8,
    },
    {// lv7
        cost: [{type: "Gold", value: 900000},],
        timeHours: 12,
        thLevelRequired: 9,
    },
    {// lv8
        cost: [{type: "Gold", value: 1200000},],
        timeHours: 18,
        thLevelRequired: 10,
    },
    {// lv9
        cost: [{type: "Gold", value: 1600000},],
        timeHours: 20,
        thLevelRequired: 11,
    },
    {// lv10
        cost: [{type: "Gold", value: 1800000},],
        timeHours: 1*24,
        thLevelRequired: 11,
    },
    {// lv11
        cost: [{type: "Gold", value: 2300000},],
        timeHours: 1.25*24,
        thLevelRequired: 12,
    },
    {// lv12
        cost: [{type: "Gold", value: 2400000},],
        timeHours: 1.5*24,
        thLevelRequired: 12,
    },
    {// lv13
        cost: [{type: "Gold", value: 2800000},],
        timeHours: 2*24,
        thLevelRequired: 13,
    },
    {// lv14
        cost: [{type: "Gold", value: 4300000},],
        timeHours: 2.5*24,
        thLevelRequired: 14,
    },
    {// lv15
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 3.5*24,
        thLevelRequired: 15,
    },
    {// lv16
        cost: [{type: "Gold", value: 7000000},],
        timeHours: 5*24,
        thLevelRequired: 16,
    },
    {// lv17
        cost: [{type: "Gold", value: 19500000},],
        timeHours: 14.5*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	1	1	1	2	3	4	4	4	4	4	4	4	4	4	4
*/
export const mortarNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 1},    // th3
    {number: 1},    // th4
    {number: 1},    // th5
    {number: 2},    // th6
    {number: 3},    // th7
    {number: 4},    // th8
    {number: 4},    // th9
    {number: 4},    // th10
    {number: 4},    // th11
    {number: 4},    // th12
    {number: 4},    // th13
    {number: 4},    // th14
    {number: 4},    // th15
    {number: 4},    // th16
    {number: 4},    // th17
];

