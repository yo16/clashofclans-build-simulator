/*
Townhall タウンホール
*/
import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	450	-	-	-	13	-	
2	1,600	1,000	10秒	3	17	-	
3	1,850	4,000	30分	42	25	2	
4	2,100	25,000	3時間	103	29	4	
5	2,400	150,000	6時間	146	36	8	
6	2,800	500,000	12時間	207	42	11	
7	3,300	1,000,000	18時間	254	54	15	
8	3,900	2,000,000	1日	293	64	23	
9	4,600	2,500,000	2日	415	77	26	
10	5,500	3,500,000	3日	509	84	30	
11	6,800	4,000,000	5日	657	89	31	
12	7,500	6,000,000	6日	720	92	36	
13	8,200	9,000,000	7.5日	804	94	39	
14	8,900	12,000,000	9日	881	95	44	
15	9,600	13,000,000	10日	929	98	44	
16	10,000	16,000,000	11日	974	94	44	
17	10,400	16,000,000	12日	1,018	93	47
*/
export const townhallCosts: BuildingCost[] = [
    {// th1
        cost: [
            {type: "Gold", value: 0},
        ],
        timeHours: 0,
        thLevelRequired: 0,
    },
    {// th2
        cost: [
            {type: "Gold", value: 1000},
        ],
        timeHours: 10/60/60,
        thLevelRequired: 1,
    },
    {// th3
        cost: [
            {type: "Gold", value: 4000},
        ],
        timeHours: 30/60,
        thLevelRequired: 2,
    },
    {// th4
        cost: [
            {type: "Gold", value: 25000},
        ],
        timeHours: 3,
        thLevelRequired: 3,
    },
    {// th5
        cost: [
            {type: "Gold", value: 150000},
        ],
        timeHours: 6,
        thLevelRequired: 4,
    },
    {// th6
        cost: [
            {type: "Gold", value: 500000},
        ],
        timeHours: 12,
        thLevelRequired: 5,
    },
    {// th7
        cost: [
            {type: "Gold", value: 1000000},
        ],
        timeHours: 18,
        thLevelRequired: 6,
    },
    {// th8
        cost: [
            {type: "Gold", value: 2000000},
        ],
        timeHours: 24,
        thLevelRequired: 7,
    },
    {// th9
        cost: [
            {type: "Gold", value: 2500000},
        ],
        timeHours: 24*2,
        thLevelRequired: 8,
    },
    {// th10
        cost: [
            {type: "Gold", value: 3500000},
        ],
        timeHours: 24*3,
        thLevelRequired: 9,
    },
    {// th11
        cost: [
            {type: "Gold", value: 4000000},
        ],
        timeHours: 24*5,
        thLevelRequired: 10,
    },
    {// th12
        cost: [
            {type: "Gold", value: 6000000},
        ],
        timeHours: 24*6,
        thLevelRequired: 11,
    },
    {// th13
        cost: [
            {type: "Gold", value: 9000000},
        ],
        timeHours: 24*7.5,
        thLevelRequired: 12,
    },
    {// th14
        cost: [
            {type: "Gold", value: 12000000},
        ],
        timeHours: 24*9,
        thLevelRequired: 13,
    },
    {// th15
        cost: [
            {type: "Gold", value: 13000000},
        ],
        timeHours: 24*10,
        thLevelRequired: 14,
    },
    {// th16
        cost: [
            {type: "Gold", value: 16000000},
        ],
        timeHours: 24*11,
        thLevelRequired: 15,
    },
    {// th17
        cost: [
            {type: "Gold", value: 16000000},
        ],
        timeHours: 24*12,
        thLevelRequired: 16,
    },
];


/*
TH別設置上限数
*/
export const townhallNumberAvailable: THNumberAvailable[] = [
    {number: 1},    // th1
    {number: 1},    // th2
    {number: 1},    // th3
    {number: 1},    // th4
    {number: 1},    // th5
    {number: 1},    // th6
    {number: 1},    // th7
    {number: 1},    // th8
    {number: 1},    // th9
    {number: 1},    // th10
    {number: 1},    // th11
    {number: 1},    // th12
    {number: 1},    // th13
    {number: 1},    // th14
    {number: 1},    // th15
    {number: 1},    // th16
    {number: 1},    // th17
];
