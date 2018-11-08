import { AppointmentTest } from "./appointmentTest";

export interface Test {
	testId : number,
	testCode : string,
	testName : string,
	charges : number,
	days : number,
	isLMP : boolean,
	isLabTest : boolean,
	testTypeId : number,
	testCategoryId : number,
	appointmentTests : AppointmentTest[]
}