/*
Air Sweeper エアスイーパー
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	1.6マス	750	200,000	4時間	120	6	
2	2.0マス	800	300,000	6時間	146	6	
3	2.4マス	850	450,000	8時間	169	7	
4	2.8マス	900	800,000	12時間	207	8	
5	3.2マス	950	1,200,000	1日	293	9	
6	3.6マス	1,000	1,900,000	2日	415	10	
7	4.0マス	1,050	3,400,000	3日	509	11	
*/
export const airSweeperCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 200000},],
        timeHours: 4,
        thLevelRequired: 6,
    },
    {// lv2
        cost: [{type: "Gold", value: 300000},],
        timeHours: 6,
        thLevelRequired: 6,
    },
    {// lv3
        cost: [{type: "Gold", value: 450000},],
        timeHours: 8,
        thLevelRequired: 7,
    },
    {// lv4
        cost: [{type: "Gold", value: 800000},],
        timeHours: 12,
        thLevelRequired: 8,
    },
    {// lv5
        cost: [{type: "Gold", value: 1200000},],
        timeHours: 1*24,
        thLevelRequired: 9,
    },
    {// lv6
        cost: [{type: "Gold", value: 1900000},],
        timeHours: 2*24,
        thLevelRequired: 10,
    },
    {// lv7
        cost: [{type: "Gold", value: 3400000},],
        timeHours: 3*24,
        thLevelRequired: 11,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	1	1	1	2	2	2	2	2	2	2	2	2
*/
export const airSweeperNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 1},    // th5
    {number: 1},    // th6
    {number: 1},    // th7
    {number: 2},    // th8
    {number: 2},    // th9
    {number: 2},    // th10
    {number: 2},    // th11
    {number: 2},    // th12
    {number: 2},    // th13
    {number: 2},    // th14
    {number: 2},    // th15
    {number: 2},    // th16
    {number: 2},    // th17
];
