export interface EmployeeCompany {

    DesignationId: number,
    ManagementLevelId: number,
    FunctionId: number,
    GroupId: number,
    EmployeeStatusId: number,
    EmployeeTypeId: number,
    Shift: number,
<<<<<<< HEAD
    ContractStart: Date,
    ContractEnd: Date,
=======
    ContractStartDate: Date,
    ContractEndDate: Date,
>>>>>>> master
    AppointmentDate: Date,
    NextAppraisalDate: Date,
    ConfirmationDueDate: Date,
    ConfirmationDate: Date,
    LeavingDate: Date,
    ResignDate: Date,
    Approver: string,
    UserId: number,
    UserCompanyId: number
}