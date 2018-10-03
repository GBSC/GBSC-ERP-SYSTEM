import { Injectable } from '@angular/core';

export class Company {
    SNo: number;
    Description: string;
}

let companies: Company[] = [{
    "SNo": 1,
    "Description": "HRMS"
}, {
    "SNo": 2,
    "Description": "Inventory System"
}, {
    "SNo": 3,
    "Description": "HIMS"
}, {
    "SNo": 4,
    "Description": "Lab"
}, {
    "SNo": 5,
    "Description": "Finance"
}];

@Injectable()
export class FinanceService {
    getCompanies() {
        return companies;
    }
}