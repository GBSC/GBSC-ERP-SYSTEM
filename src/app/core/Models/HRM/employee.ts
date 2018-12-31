import { Role } from "./role";

export interface Employee {
    FirstName: string,
    LastName: string,
    Phone: string,
    DOB: Date,
    Gender: string,
    CNIC: string,
    Email: string,
    PhotoFilePath: File,
    POB: string,
    FatherName: string,
    CNICExpiry: string,
    BloodGroup: string,
    MaritalStatus: string,
    HomePhone: string,
    Address: string,
    PermanentAddress: string,
    ReligionId: number,
    CityId: number,
    UserLanguages: Array<any>,
    userId: any,
    roleId: number,
    role: Role


}