
export type BuildingStatus = {
    name: string,
    nameTranslated: string,
    maxLv: number,
    units: {
        id: number,
        currentLv: number,
        targetLv: number
    }[],
};
