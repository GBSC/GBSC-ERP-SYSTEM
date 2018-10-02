import { SalesPerson } from "./SalesPerson";

export interface Distributor {
    distributorId: number,
    dRN: string,
    status: string,
    name: string,
    address: string,
    city: string,
    country: string,
    landlineNumber: string,
    mobileNumber: string,
    hasTerritory : boolean;
    faxNumber: string,
    email: string,
    nature: string,
    contactName: string,
    contactNumber: string,
    territoryId: number,
    salesPeople : SalesPerson[]
}