import { AppointmentTest } from "./appointmentTest";

export interface Test {
	TestId : number,
	TestCode : string,
	TestName : string,
	Charges : number,
	Days : number,
	IsLMP : boolean,
	IsLabTest : boolean,
	TestTypeId : number,
	TestCategoryId : number,
	AppointmentTests : AppointmentTest[]
}