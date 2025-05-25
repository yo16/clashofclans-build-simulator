/*
Air Defense 対空砲
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	80	80	800	22,000	1時間	60	4	
2	110	110	850	90,000	2時間	84	4	
3	140	140	900	210,000	6時間	146	5	
4	160	160	950	500,000	12時間	207	6	
5	190	190	1,000	800,000	18時間	254	7	
6	230	230	1,050	1,000,000	1日	293	8	
7	280	280	1,100	1,750,000	2日	415	9	
8	320	320	1,210	2,300,000	2.5日	464	10	
9	360	360	1,300	3,400,000	3日	509	11	
10	400	400	1,400	5,000,000	4日	587	12	
11	440	440	1,500	5,600,000	4.5日	623	13	
12	500	500	1,650	6,500,000	5日	657	14	
13	540	540	1,750	8,000,000	6日	720	15	
14	600	600	1,850	9,000,000	7日	777	16	
15	650	650	1,950	21,000,000	15.25日	1,147	17	
*/
export const airDefenseCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 22000},],
        timeHours: 1,
        thLevelRequired: 4,
    },
    {// lv2
        cost: [{type: "Gold", value: 90000},],
        timeHours: 2,
        thLevelRequired: 4,
    },
    {// lv3
        cost: [{type: "Gold", value: 210000},],
        timeHours: 6,
        thLevelRequired: 5,
    },
    {// lv4
        cost: [{type: "Gold", value: 500000},],
        timeHours: 12,
        thLevelRequired: 6,
    },
    {// lv5
        cost: [{type: "Gold", value: 800000},],
        timeHours: 18,
        thLevelRequired: 7,
    },
    {// lv6
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 1*24,
        thLevelRequired: 8,
    },
    {// lv7
        cost: [{type: "Gold", value: 1750000},],
        timeHours: 2*24,
        thLevelRequired: 9,
    },
    {// lv8
        cost: [{type: "Gold", value: 2300000},],
        timeHours: 2.5*24,
        thLevelRequired: 10,
    },
    {// lv9
        cost: [{type: "Gold", value: 3400000},],
        timeHours: 3*24,
        thLevelRequired: 11,
    },
    {// lv10
        cost: [{type: "Gold", value: 5000000},],
        timeHours: 4*24,    
        thLevelRequired: 12,
    },
    {// lv11
        cost: [{type: "Gold", value: 5600000},],
        timeHours: 4.5*24,
        thLevelRequired: 13,
    },
    {// lv12
        cost: [{type: "Gold", value: 6500000},],
        timeHours: 5*24,
        thLevelRequired: 14,
    },
    {// lv13
        cost: [{type: "Gold", value: 8000000},],
        timeHours: 6*24,
        thLevelRequired: 15,
    },
    {// lv14
        cost: [{type: "Gold", value: 9000000},],
        timeHours: 7*24,
        thLevelRequired: 16,
    },
    {// lv15
        cost: [{type: "Gold", value: 21000000},],
        timeHours: 15.25*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	1	1	2	3	3	4	4	4	4	4	4	4	4	4
*/
export const airDefenseNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 1},    // th4
    {number: 1},    // th5
    {number: 2},    // th6
    {number: 3},    // th7
    {number: 3},    // th8
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

