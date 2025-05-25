/*
Hidden Tesla かくしテスラ
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	34	20.4	600	250,000	2時間	84	7	
2	40	24	630	350,000	3時間	103	7	
3	48	28.8	660	500,000	4時間	120	7	
4	55	33	690	600,000	6時間	146	8	
5	64	38.4	730	800,000	12時間	207	8	
6	75	45	770	1,200,000	1日	293	8	
7	87	52.2	810	1,400,000	1.25日	328	9	
8	99	59.4	850	1,600,000	1.5日	360	10	
9	110	66	900	2,100,000	1.75日	388	11	
10	120	72	980	3,000,000	2日	415	12	
11	130	78	1,100	3,100,000	2.5日	464	13	
12	140	84	1,200	3,700,000	3日	509	13	
13	150	90	1,350	5,100,000	4日	587	14	
14	160	96	1,450	6,500,000	5日	657	15	
15	170	102	1,550	8,200,000	6日	720	16	
16	180	108	1,650	20,500,000	15日	1,138	17
*/
export const hiddenTeslaCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 250000},],
        timeHours: 2,
        thLevelRequired: 7,
    },
    {// lv2
        cost: [{type: "Gold", value: 350000},],
        timeHours: 3,
        thLevelRequired: 7,
    },
    {// lv3
        cost: [{type: "Gold", value: 500000},],
        timeHours: 4,
        thLevelRequired: 7,
    },
    {// lv4
        cost: [{type: "Gold", value: 600000},],
        timeHours: 6,
        thLevelRequired: 8,
    },
    {// lv5
        cost: [{type: "Gold", value: 800000},],
        timeHours: 12,
        thLevelRequired: 8,
    },
    {// lv6
        cost: [{type: "Gold", value: 1200000},],
        timeHours: 1*24,
        thLevelRequired: 8,
    },
    {// lv7
        cost: [{type: "Gold", value: 1400000},],
        timeHours: 1.25*24,
        thLevelRequired: 9,
    },
    {// lv8
        cost: [{type: "Gold", value: 1600000},],
        timeHours: 1.5*24,
        thLevelRequired: 10,
    },
    {// lv9
        cost: [{type: "Gold", value: 2100000},],
        timeHours: 1.75*24,
        thLevelRequired: 11,
    },
    {// lv10
        cost: [{type: "Gold", value: 3000000},],
        timeHours: 2*24,
        thLevelRequired: 12,
    },
    {// lv11
        cost: [{type: "Gold", value: 3100000},],
        timeHours: 2.5*24,
        thLevelRequired: 13,
    },
    {// lv12
        cost: [{type: "Gold", value: 3700000},],
        timeHours: 3*24,
        thLevelRequired: 13,
    },
    {// lv13
        cost: [{type: "Gold", value: 5100000},],
        timeHours: 4*24,
        thLevelRequired: 14,
    },
    {// lv14
        cost: [{type: "Gold", value: 6500000},],
        timeHours: 5*24,
        thLevelRequired: 15,
    },
    {// lv15
        cost: [{type: "Gold", value: 8200000},],
        timeHours: 6*24,
        thLevelRequired: 16,
    },
    {// lv16
        cost: [{type: "Gold", value: 20500000},],
        timeHours: 15*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	2	3	4	4	4	5	5	5	5	5	5
*/
export const hiddenTeslaNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 2},    // th7
    {number: 3},    // th8
    {number: 4},    // th9
    {number: 4},    // th10
    {number: 4},    // th11
    {number: 5},    // th12
    {number: 5},    // th13
    {number: 5},    // th14
    {number: 5},    // th15
    {number: 5},    // th16
    {number: 5},    // th17
];
