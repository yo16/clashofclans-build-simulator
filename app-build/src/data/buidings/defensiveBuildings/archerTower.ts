/*
Archer Tower アーチャータワー
*/
import { BuildingCost, THNumberAvailable } from "../defBuilding";

/*
コスト
1	11	5.5	380	1,000	15秒	3	2	
2	15	7.5	420	2,000	2分	10	2	
3	19	9.5	460	5,000	20分	34	3	
4	25	12.5	500	20,000	1時間	60	4	
5	30	15	540	70,000	1時間 30分	73	5	
6	35	17.5	580	80,000	2時間	84	5	
7	42	21	630	150,000	3時間	103	6	
8	48	24	690	200,000	4時間	120	7	
9	56	28	750	400,000	5時間	134	8	
10	63	31.5	810	460,000	6時間	146	8	
11	70	35	890	600,000	7時間	158	9	
12	74	37	970	700,000	8時間	169	10	
13	78	39	1,050	1,000,000	10時間	189	10	
14	82	41	1,130	1,100,000	11時間	198	11	
15	85	42.5	1,230	1,300,000	12時間	207	11	
16	90	45	1,310	1,600,000	20時間	268	12	
17	100	50	1,390	1,800,000	1日	293	12	
18	110	55	1,510	2,000,000	1.25日	328	13	
19	120	60	1,600	2,200,000	1.5日	360	13	
20	135	67.5	1,700	3,000,000	2日	415	14	
21	145	72.5	1,800	4,000,000	3日	509	15	
*/
export const archerTowerCosts: BuildingCost[] = [
    {// lv1
        cost: [{type: "Gold", value: 1000},],
        timeHours: 15/60/60,
        thLevelRequired: 2,
    },
    {// lv2
        cost: [{type: "Gold", value: 2000},],
        timeHours: 2*60,
        thLevelRequired: 2,
    },
    {// lv3
        cost: [{type: "Gold", value: 5000},],
        timeHours: 20/60,
        thLevelRequired: 3,
    },
    {// lv4
        cost: [{type: "Gold", value: 20000},],
        timeHours: 1,
        thLevelRequired: 4,
    },
    {// lv5
        cost: [{type: "Gold", value: 70000},],
        timeHours: 1.5,
        thLevelRequired: 5,
    },
    {// lv6
        cost: [{type: "Gold", value: 80000},],
        timeHours: 2,
        thLevelRequired: 5,
    },
    {// lv7
        cost: [{type: "Gold", value: 150000},],
        timeHours: 3,
        thLevelRequired: 6,
    },
    {// lv8
        cost: [{type: "Gold", value: 200000},],
        timeHours: 4,
        thLevelRequired: 7,
    },
    {// lv9
        cost: [{type: "Gold", value: 400000},],
        timeHours: 5,
        thLevelRequired: 8,
    },
    {// lv10
        cost: [{type: "Gold", value: 460000},],
        timeHours: 6,
        thLevelRequired: 8,
    },
    {// lv11
        cost: [{type: "Gold", value: 600000},],
        timeHours: 7,
        thLevelRequired: 9,
    },
    {// lv12
        cost: [{type: "Gold", value: 700000},],
        timeHours: 8,
        thLevelRequired: 10,
    },
    {// lv13
        cost: [{type: "Gold", value: 1000000},],
        timeHours: 10,
        thLevelRequired: 10,
    },
    {// lv14
        cost: [{type: "Gold", value: 1100000},],
        timeHours: 11,
        thLevelRequired: 11,
    },
    {// lv15
        cost: [{type: "Gold", value: 1300000},],
        timeHours: 12,
        thLevelRequired: 11,
    },
    {// lv16
        cost: [{type: "Gold", value: 1600000},],
        timeHours: 20,
        thLevelRequired: 12,
    },
    {// lv17
        cost: [{type: "Gold", value: 1800000},],
        timeHours: 1*24,
        thLevelRequired: 12,
    },
    {// lv18
        cost: [{type: "Gold", value: 2000000},],
        timeHours: 1.25*24,
        thLevelRequired: 13,
    },
    {// lv19
        cost: [{type: "Gold", value: 2200000},],
        timeHours: 1.5*24,
        thLevelRequired: 13,
    },
    {// lv20
        cost: [{type: "Gold", value: 3000000},],
        timeHours: 2*24,
        thLevelRequired: 14,
    },
    {// lv21
        cost: [{type: "Gold", value: 4000000},],
        timeHours: 3*24,
        thLevelRequired: 15,
    },
];

/*
TH別設置上限数
タウンホールレベル	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17
設置数上限	-	1	1	2	3	3	4	5	6	7	8	8	8	8	8	8	5
*/
export const archerTowerNumberAvailable: THNumberAvailable[] = [
    {number: 0},    // th1
    {number: 1},    // th2
    {number: 1},    // th3
    {number: 2},    // th4
    {number: 3},    // th5
    {number: 3},    // th6
    {number: 4},    // th7
    {number: 5},    // th8
    {number: 6},    // th9
    {number: 7},    // th10
    {number: 8},    // th11
    {number: 8},    // th12
    {number: 8},    // th13
    {number: 8},    // th14
    {number: 8},    // th15
    {number: 8},    // th16
    {number: 5},    // th17
];
