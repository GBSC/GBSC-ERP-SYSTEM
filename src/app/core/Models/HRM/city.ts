import { Company } from "./company";
import { Region } from "../Inventory/Setup/Region";
import { Branch } from "./branch";
import { Area } from "../Inventory/Setup/Area";
import { Employee } from "./employee";

export interface City {
    cityId: number,
    code: string,
    name: string,
    companyId: number,
    company: Company,
    countryId: number,
    country: any,
    regionId: number,
    region: Region,
    createdAt: Date,
    editedAt: Date,
    editedBy: number,
    deleted: boolean,
    branches: Branch[],
    areas: Area[],
    userId: number,
    user: Employee
}