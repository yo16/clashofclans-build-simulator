/*
Bomb 爆弾
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	20	400	-	-	3	
2	24	1,000	6分	18	3	
3	29	10,000	20分	34	5	
4	35	40,000	40分	48	7	
5	42	100,000	1時間	60	8	
6	54	230,000	3時間	103	9	
7	72	330,000	5時間	134	10	
8	92	500,000	6時間	146	11	
9	125	750,000	12時間	207	13	
10	140	1,300,000	1日	293	14	
11	155	2,500,000	2日	415	15	
12	170	4,000,000	3日	509	16	
13	185	10,000,000	8日	831	17	
*/
export const bombCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 400},],
        timeHours: 0,
        thLevelRequired: 3,
    },
    {// lv2
        cost: [{type: "Gold", value: 1000},],
        timeHours: 6/60,
        thLevelRequired: 3,
    },
    {// lv3
        cost: [{type: "Gold", value: 10000},],
        timeHours: 20/60,
        thLevelRequired: 5,
    },
    {// lv4
        cost: [{type: "Gold", value: 40000},],
        timeHours: 40/60,
        thLevelRequired: 7,
    },
    {// lv5
        cost: [{type: "Gold", value: 100000},],
        timeHours: 1,
        thLevelRequired: 8,
    },
    {// lv6
        cost: [{type: "Gold", value: 230000},],
        timeHours: 3,
        thLevelRequired: 9,
    },
    {// lv7
        cost: [{type: "Gold", value: 330000},],
        timeHours: 5,
        thLevelRequired: 10,
    },
    {// lv8
        cost: [{type: "Gold", value: 500000},],
        timeHours: 6,
        thLevelRequired: 11,
    },
    {// lv9
        cost: [{type: "Gold", value: 750000},],
        timeHours: 12,
        thLevelRequired: 13,
    },
    {// lv10
        cost: [{type: "Gold", value: 1300000},],
        timeHours: 1,
        thLevelRequired: 14,
    },
    {// lv11
        cost: [{type: "Gold", value: 2500000},],
        timeHours: 2,
        thLevelRequired: 15,
    },
    {// lv12
        cost: [{type: "Gold", value: 4000000},],
        timeHours: 3,
        thLevelRequired: 16,
    },
    {// lv13
        cost: [{type: "Gold", value: 10000000},],
        timeHours: 8,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	2	2	4	4	6	6	6	6	6	6	7	8	8	8	8
*/
export const bombNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 2},    // th3
    {number: 2},    // th4
    {number: 4},    // th5
    {number: 4},    // th6
    {number: 6},    // th7
    {number: 6},    // th8
    {number: 6},    // th9
    {number: 6},    // th10
    {number: 6},    // th11
    {number: 6},    // th12
    {number: 7},    // th13
    {number: 8},    // th14
    {number: 8},    // th15
    {number: 8},    // th16
    {number: 8},    // th17
];
