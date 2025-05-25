/*
Inferno Tower インフェルノタワー
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	30	80	800	3.84	10.24	102.4	1,500	1,000,000	12時間	207	10	
2	35	100	1,000	4.48	12.8	128	1,800	1,200,000	1日	293	10	
3	40	120	1,200	5.12	15.36	153.6	2,100	2,400,000	2日	415	10	
4	45	140	1,400	5.76	17.92	179.2	2,400	3,400,000	2.5日	464	11	
5	50	150	1,500	6.4	19.2	192	2,700	4,200,000	3日	509	11	
6	55	160	1,600	7.04	20.48	204.8	3,000	6,000,000	5日	657	12	
7	65	180	1,800	8.32	23.04	230.4	3,300	8,000,000	7日	777	13	
8	80	210	2,100	10.24	26.88	268.8	3,700	9,500,000	7.5日	804	14	
9	100	230	2,300	12.8	29.44	294.4	4,000	10,000,000	7.75日	818	15	
10	120	260	2,600	15.36	33.28	332.8	4,400	11,000,000	8日	831	16	
11	140	290	2,900	17.92	37.12	371.2	4,800	22,000,000	15.5日	1,157	17	
*/
export const infernoTowerCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 12,
        thLevelRequired: 10,
    },
    {// lv2
        cost: [{type: "Gold", value: 1200000},],
        timeHours: 1*24,
        thLevelRequired: 10,
    },
    {// lv3
        cost: [{type: "Gold", value: 2400000},],
        timeHours: 2*24,
        thLevelRequired: 10,
    },
    {// lv4
        cost: [{type: "Gold", value: 3400000},],
        timeHours: 2.5*24,
        thLevelRequired: 11,
    },
    {// lv5
        cost: [{type: "Gold", value: 4200000},],
        timeHours: 3*24,
        thLevelRequired: 11,
    },
    {// lv6
        cost: [{type: "Gold", value: 6000000},],
        timeHours: 5*24,
        thLevelRequired: 12,
    },
    {// lv7
        cost: [{type: "Gold", value: 8000000},],
        timeHours: 7*24,
        thLevelRequired: 13,
    },
    {// lv8
        cost: [{type: "Gold", value: 9500000},],
        timeHours: 7.5*24,
        thLevelRequired: 14,
    },
    {// lv9
        cost: [{type: "Gold", value: 10000000},],
        timeHours: 7.75*24,
        thLevelRequired: 15,
    },
    {// lv10
        cost: [{type: "Gold", value: 11000000},],
        timeHours: 8*24,
        thLevelRequired: 16,
    },
    {// lv11
        cost: [{type: "Gold", value: 22000000},],
        timeHours: 15.5*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	2	2	3	3	3	3	3	3
*/
export const infernoTowerNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 0},    // th7
    {number: 0},    // th8
    {number: 0},    // th9
    {number: 2},    // th10
    {number: 2},    // th11
    {number: 3},    // th12
    {number: 3},    // th13
    {number: 3},    // th14
    {number: 3},    // th15
    {number: 3},    // th16
    {number: 3},    // th17
];
