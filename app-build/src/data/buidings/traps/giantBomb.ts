/*
Giant Bomb 巨大爆弾
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";



/*
コスト

1	175	3マス	12,500	-	-	6	
2	200	3.5マス	75,000	1時間	60	6	
3	225	3.5マス	220,000	3時間	103	8	
4	250	4マス	750,000	8時間	169	10	
5	275	4マス	900,000	10時間	189	11	
6	325	4マス	1,300,000	11時間	198	13	
7	375	4マス	1,500,000	12時間	207	13	
8	400	4マス	2,500,000	2日	415	14	
9	425	4マス	4,000,000	3日	509	15	
10	450	4マス	5,500,000	4日	587	16	
11	475	4マス	12,000,000	9日	881	17	
*/
export const giantBombCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 12500},],
        timeHours: 0,
        thLevelRequired: 6,
    },
    {// lv2
        cost: [{type: "Gold", value: 75000},],
        timeHours: 1,
        thLevelRequired: 6,
    },
    {// lv3
        cost: [{type: "Gold", value: 220000},],
        timeHours: 3,
        thLevelRequired: 8,
    },
    {// lv4
        cost: [{type: "Gold", value: 750000},],
        timeHours: 8,
        thLevelRequired: 10,
    },
    {// lv5
        cost: [{type: "Gold", value: 900000},],
        timeHours: 10,
        thLevelRequired: 11,
    },
    {// lv6
        cost: [{type: "Gold", value: 1300000},],
        timeHours: 11,
        thLevelRequired: 13,
    },
    {// lv7
        cost: [{type: "Gold", value: 1500000},],
        timeHours: 12,
        thLevelRequired: 13,
    },
    {// lv8
        cost: [{type: "Gold", value: 2500000},],
        timeHours: 2*24,
        thLevelRequired: 14,
    },
    {// lv9
        cost: [{type: "Gold", value: 4000000},],
        timeHours: 3*24,
        thLevelRequired: 15,
    },
    {// lv10
        cost: [{type: "Gold", value: 5500000},],
        timeHours: 4*24,
        thLevelRequired: 16,
    },
    {// lv11
        cost: [{type: "Gold", value: 12000000},],
        timeHours: 9*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	1	2	3	4	5	5	6	6	7	7	7	8
*/
export const giantBombNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 1},    // th6
    {number: 2},    // th7
    {number: 3},    // th8
    {number: 4},    // th9
    {number: 5},    // th10
    {number: 5},    // th11
    {number: 6},    // th12
    {number: 6},    // th13
    {number: 7},    // th14
    {number: 7},    // th15
    {number: 7},    // th16
    {number: 8},    // th17
];
