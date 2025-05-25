/*
コスト
*/
interface CostValue {
    type: "Gold" | "Elixir" | "DarkElixir",
    value: number,
}
export interface BuildingCost {
    cost: CostValue[],
    timeHours: number,   // 時間単位
    thLevelRequired: number,
}


/*
TH別設置上限数
*/
export interface THNumberAvailable {
    number: number,
}
