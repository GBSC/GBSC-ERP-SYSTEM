import { Branch } from "./branch";

export interface Company {
    companyId: number,
    name: string,
    numberOfEmployees: number,
    branches: [Branch]
}

