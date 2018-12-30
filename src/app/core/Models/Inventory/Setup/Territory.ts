import { Distributor } from "./Distributor";
import { Area } from "./Area";

export interface Territory {
    territoryId: number,
    name: string,
    isAssigned: boolean,
    areaId: number,
    area: Area,
    distributorId : number,
    distributor: Distributor
}