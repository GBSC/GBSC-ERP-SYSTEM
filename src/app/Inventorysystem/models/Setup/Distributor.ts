<<<<<<< HEAD
=======
import { SalesPerson } from "./SalesPerson";

>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56
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
<<<<<<< HEAD
    territoryId: number
=======
    territoryId: number,
    salesPeople : SalesPerson[]
>>>>>>> d6ac958d896e8ef818ac88e42f5a4d3ae70abb56
}