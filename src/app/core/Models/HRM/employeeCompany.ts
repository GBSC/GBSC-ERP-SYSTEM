export interface EmployeeCompany {
    
    DesignationId: number,
    ManagementLevelId: number,
    FunctionId: number,
    GroupId:number,
    EmployeeStatusId: number,
    EmployeeTypeId: number,
    Shift: number,  
    ContractStart: Date,
    ContractEnd: Date,
    AppointmentDate: Date,
    NextAppraisalDate: Date,
    ConfirmDueDate: Date,
    ConfirmationDate: Date,
    LeavingDate: Date,
    ResignDate: Date,
    Approver: string
}