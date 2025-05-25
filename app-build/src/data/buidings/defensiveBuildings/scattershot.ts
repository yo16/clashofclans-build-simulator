/*
Scattershot 投石機
*/

import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト

1	125	300-400	100-300	3,600	8,000,000	7日	777	13	
2	150	360-480	120-360	4,200	9,000,000	8日	831	13	
3	175	420-560	140-420	4,800	11,000,000	8.5日	856	14	
4	185	444-592	148-444	5,100	11,500,000	8.75日	869	15	
5	190	456-608	152-456	5,410	12,000,000	9日	881	16	
6	195	468-624	156-468	5,600	22,500,000	15.75日	1,166	17	
*/
export const scattershotCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 8000000},],
        timeHours: 7*24,
        thLevelRequired: 13,
    },
    {// lv2
        cost: [{type: "Gold", value: 9000000},],
        timeHours: 8*24,
        thLevelRequired: 13,
    },
    {// lv3
        cost: [{type: "Gold", value: 11000000},],
        timeHours: 8.5*24,
        thLevelRequired: 14,
    },
    {// lv4
        cost: [{type: "Gold", value: 11500000},],
        timeHours: 8.75*24,
        thLevelRequired: 15,
    },
    {// lv5
        cost: [{type: "Gold", value: 12000000},],
        timeHours: 9*24,
        thLevelRequired: 16,
    },
    {// lv6
        cost: [{type: "Gold", value: 22500000},],
        timeHours: 15.75*24,
        thLevelRequired: 17,
    },
];

/*
TH別設置上限数
タウンホールLv	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	-	-	-	-	-	-	-	-	-	-	-	2	2	2	2	2
*/
export const scattershotNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 0},    // th2
    {number: 0},    // th3
    {number: 0},    // th4
    {number: 0},    // th5
    {number: 0},    // th6
    {number: 0},    // th7
    {number: 0},    // th8
    {number: 0},    // th9
    {number: 0},    // th10
    {number: 2},    // th11
    {number: 2},    // th12
    {number: 2},    // th13
    {number: 2},    // th14
    {number: 2},    // th15
    {number: 2},    // th16
    {number: 2},    // th17
];
