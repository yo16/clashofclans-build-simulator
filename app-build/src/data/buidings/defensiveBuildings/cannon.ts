/*
Cannon 大砲
*/
import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	9	7.2	420	250	5秒	2	1	
2	11	8.8	470	1,000	30秒	5	1	
3	15	12	520	4,000	2分	10	2	
4	19	15.2	570	16,000	20分	34	3	
5	25	20	620	50,000	30分	42	4	
6	31	24.8	670	60,000	1時間	60	5	
7	40	32	730	100,000	2時間	84	6	
8	48	38.4	800	160,000	3時間	103	7	
9	56	44.8	880	250,000	3時間 30分	112	8	
10	64	51.2	960	330,000	4時間	120	8	
11	74	59.2	1,060	500,000	4時間 30分	127	9	
12	85	68	1,160	600,000	5時間	134	10	
13	95	76	1,260	660,000	6時間	146	10	
14	100	80	1,380	1,000,000	8時間	169	11	
15	105	84	1,500	1,200,000	10時間	207	11	
16	110	88	1,620	1,300,000	11時間	198	12	
17	115	92	1,740	1,500,000	12時間	207	12	
18	125	100	1,870	1,800,000	20時間	268	13	
19	135	108	2,000	2,000,000	1日	293	13	
20	150	120	2,150	2,600,000	1.5日	360	14	
21	160	128	2,250	3,000,000	2日	415	15	
*/
export const cannonCosts: BuildingCost[] = [
    {// lv1
        cost: [
            {type: "Gold", value: 250},
        ],
        timeHours: 5/60/60,
        thLevelRequired: 1,
    },
    {// lv2
        cost: [
            {type: "Gold", value: 1000},
        ],
        timeHours: 30/60/60,
        thLevelRequired: 1,
    },
    {// lv3
        cost: [
            {type: "Gold", value: 4000},
        ],
        timeHours: 2/60,
        thLevelRequired: 2,
    },
    {// lv4
        cost: [
            {type: "Gold", value: 16000},
        ],
        timeHours: 20/60,
        thLevelRequired: 3,
    },
    {// lv5
        cost: [
            {type: "Gold", value: 50000},
        ],
        timeHours: 30/60,
        thLevelRequired: 4,
    },
    {// lv6
        cost: [
            {type: "Gold", value: 60000},
        ],
        timeHours: 1,
        thLevelRequired: 5,
    },
    {// lv7
        cost: [
            {type: "Gold", value: 100000},
        ],
        timeHours: 2,
        thLevelRequired: 6,
    },
    {// lv8
        cost: [
            {type: "Gold", value: 160000},
        ],
        timeHours: 3,
        thLevelRequired: 7,
    },
    {// lv9
        cost: [
            {type: "Gold", value: 250000},
        ],
        timeHours: 3.5,
        thLevelRequired: 8,
    },
    {// lv10
        cost: [
            {type: "Gold", value: 330000},
        ],
        timeHours: 4,
        thLevelRequired: 8,
    },
    {// lv11
        cost: [
            {type: "Gold", value: 500000},
        ],
        timeHours: 4.5,
        thLevelRequired: 9,
    },
    {// lv12
        cost: [
            {type: "Gold", value: 600000},
        ],
        timeHours: 5,
        thLevelRequired: 10,
    },
    {// lv13
        cost: [
            {type: "Gold", value: 660000},
        ],
        timeHours: 6,
        thLevelRequired: 10,
    },
    {// lv14
        cost: [
            {type: "Gold", value: 1000000},
        ],
        timeHours: 8,
        thLevelRequired: 11,
    },
    {// lv15
        cost: [
            {type: "Gold", value: 1200000},
        ],
        timeHours: 10,
        thLevelRequired: 11,
    },
    {// lv16
        cost: [
            {type: "Gold", value: 1300000},
        ],
        timeHours: 11,
        thLevelRequired: 12,
    },
    {// lv17
        cost: [
            {type: "Gold", value: 1500000},
        ],
        timeHours: 12,
        thLevelRequired: 12,
    },
    {// lv18
        cost: [
            {type: "Gold", value: 1800000},
        ],
        timeHours: 20,
        thLevelRequired: 13,
    },
    {// lv19
        cost: [
            {type: "Gold", value: 2000000},
        ],
        timeHours: 1*24,
        thLevelRequired: 13,
    },
    {// lv20
        cost: [
            {type: "Gold", value: 2600000},
        ],
        timeHours: 1.5*24,
        thLevelRequired: 14,
    },
    {// lv21
        cost: [
            {type: "Gold", value: 3000000},
        ],
        timeHours: 2*24,
        thLevelRequired: 15,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	2	2	2	2	3	3	5	5	5	6	7	7	7	7	7	7	7
*/
export const cannonNumberAvailable: THNumberAvailable[] = [
    {number: 2},    // th1
    {number: 2},    // th2
    {number: 2},    // th3
    {number: 2},    // th4
    {number: 3},    // th5
    {number: 3},    // th6
    {number: 5},    // th7
    {number: 5},    // th8
    {number: 5},    // th9
    {number: 6},    // th10
    {number: 7},    // th11
    {number: 7},    // th12
    {number: 7},    // th13
    {number: 7},    // th14
    {number: 7},    // th15
    {number: 7},    // th16
    {number: 7},    // th17
];
