import { Distributor } from "./Distributor";

export interface Territory {
    territoryId: number,
    name: string,
    isAssigned : boolean,
    areaId: number,
    distributor : Distributor
}