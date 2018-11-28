import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { MasterPayroll } from '../../../Models/HRM/masterPayroll';
import { Observable } from 'rxjs';


@Injectable()
export class PayrollSetupService {

    private baseUrl: string = "SystemAdmin/api/PayrollSetup";

    constructor(private ApiService: ApiService) { }

    async getAllowances() {
        return await this.ApiService.get(`${this.baseUrl}/GetAllowances`).toPromise();
    }

    async getdataToUpdate(payrollId, payrollUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${payrollUrl}/${payrollId}`).toPromise();
    }

    async addAllowance(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddAllowance`, data).toPromise();

    }

    async updateAllowance(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowance`, data).toPromise();
    }

    async deleteAllowance(allowanceId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowance/${allowanceId}`).toPromise();
    }

    async getAllowanceArrears() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowanceArrears`).toPromise();
    }


    async addAllowanceArrear(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceArrear`, data).toPromise();
    }

    async updateAllowanceArrear(data) {

        let allowancearrear = await this.getdataToUpdate(data.key, 'GetAllowanceArrear');
        allowancearrear = { ...allowancearrear, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceArrear`, allowancearrear).toPromise();
    }

    async deleteAllowanceArrear(allowancearrearId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceArrear/${allowancearrearId}`).toPromise();
    }

    async getAllowanceDeductions() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowancedeductions`).toPromise();
    }


    async addAllowanceDeduction(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceDeduction`, data).toPromise();
    }

    async updateAllowanceDeduction(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceDeduction`, data).toPromise();
    }

    async DeleteAllowanceDeduction(allowancedeductionId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceDeduction/${allowancedeductionId}`).toPromise();
    }

    async getAllowanceCalculationTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowanceCalculationTypes`).toPromise();
    }


    async addAllowanceCalculationType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceCalculationType`, data).toPromise();
    }

    async updateAllowanceCalculationType(data) {

        let allowancecalculationtype = await this.getdataToUpdate(data.key, 'GetAllowanceCalculationType');
        allowancecalculationtype = { ...allowancecalculationtype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceCalculationType`, allowancecalculationtype).toPromise();
    }

    async DeleteAllowanceCalculationType(allowancecalculationtypeId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceCalculationType/${allowancecalculationtypeId}`).toPromise();
    }

    async getAllowanceRates() {

        return await this.ApiService.get(`${this.baseUrl}/GetAllowanceRates`).toPromise();
    }


    async addAllowanceRate(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAllowanceRate`, data).toPromise();
    }

    async updateAllowanceRate(data) {

        let allowancerate = await this.getdataToUpdate(data.key, 'GetAllowanceRate');
        allowancerate = { ...allowancerate, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAllowanceRate`, allowancerate).toPromise();
    }

    async deleteAallowanceRate(allowancerateId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAllowanceRate/${allowancerateId}`).toPromise();
    }

    async getBenefits() {
        return await this.ApiService.get(`${this.baseUrl}/GetBenefits`).toPromise();
    }


    async addBenefit(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddBenefit`, data).toPromise();
    }

    async updateBenefit(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateBenefit`, data).toPromise();
    }

    async deleteBenefit(benefitId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteBenefit/${benefitId}`).toPromise();
    }

    async getBankAdviceTemplates() {

        return await this.ApiService.get(`${this.baseUrl}/GetBankAdviceTemplates`).toPromise();
    }


    async addBankAdviceTemplate(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddBankAdviceTemplate`, data).toPromise();
    }

    async updateBankAdviceTemplate(data) {

        let bankadvicetemplate = await this.getdataToUpdate(data.key, 'GetBankAdviceTemplate');
        bankadvicetemplate = { ...bankadvicetemplate, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateBankAdviceTemplate`, bankadvicetemplate).toPromise();
    }

    async deleteBankAdviceTemplate(bankadvicetemplateId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteBankAdviceTemplate/${bankadvicetemplateId}`).toPromise();
    }

    async getChequeTemplates() {

        return await this.ApiService.get(`${this.baseUrl}/GetChequeTemplates`).toPromise();
    }


    async addChequeTemplate(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddChequeTemplate`, data).toPromise();
    }

    async updateChequeTemplate(data) {

        let chequetemplate = await this.getdataToUpdate(data.key, 'GetChequeTemplate');
        chequetemplate = { ...chequetemplate, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateChequeTemplate`, chequetemplate).toPromise();
    }

    async deleteChequeTemplate(chequetemplateId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteChequeTemplate/${chequetemplateId}`).toPromise();
    }

    async getCompensationTransactions() {

        return await this.ApiService.get(`${this.baseUrl}/GetCompensationTransactions`).toPromise();
    }


    async addCompensationTransaction(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddCompensationTransaction`, data).toPromise();
    }

    async updateCompensationTransaction(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateCompensationTransaction`, data).toPromise();
    }

    async deleteCompensationTransaction(compensationtransactionId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteCompensationTransaction/${compensationtransactionId}`).toPromise();
    }

    async getCurrencies() {

        return await this.ApiService.get(`${this.baseUrl}/GetCurrencies`).toPromise();
    }

    async addCurrency(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddCurrency`, data).toPromise();
    }

    async updateCurrency(data) {

        let Currency = await this.getdataToUpdate(data.key, 'GetCurrency');
        Currency = { ...Currency, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateCurrency`, Currency).toPromise();
    }

    async deleteCurrency(CurrencyId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteCurrency/${CurrencyId}`).toPromise();
    }

    async getFrequencies() {

        return await this.ApiService.get(`${this.baseUrl}/GetFrequencies`).toPromise();
    }


    async addFrequency(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFrequency`, data).toPromise();
    }

    async updateFrequency(data) {

        let frequency = await this.getdataToUpdate(data.key, 'GetFrequency');
        frequency = { ...frequency, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateFrequency`, frequency).toPromise();
    }

    async deleteFrequency(frequencyId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteFrequency/${frequencyId}`).toPromise();
    }

    async getFundSetups() {

        return await this.ApiService.get(`${this.baseUrl}/GetFundSetups`).toPromise();
    }


    async addFundSetup(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFundSetup`, data).toPromise();
    }

    async updateFundSetup(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateFundSetup`, data).toPromise();
    }

    async deleteFundSetup(fundsetupId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteFundSetup/${fundsetupId}`).toPromise();
    }

    async getGratuitySlabs() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuitySlabs`).toPromise();
    }


    async addGratuitySlab(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddGratuitySlab`, data).toPromise();

    }

    async updateGratuitySlab(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlab`, data).toPromise();
    }

    async deleteGratuitySlab(gratuityslabId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuitySlab/${gratuityslabId}`).toPromise();
    }

    async getGratuityTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuityTypes`).toPromise();
    }


    async addGratuityType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddGratuityType`, data).toPromise();
    }

    async updateGratuityType(data) {

        let gratuitytype = await this.getdataToUpdate(data.key, 'GetGratuityType');
        gratuitytype = { ...gratuitytype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuityType`, gratuitytype).toPromise();
    }

    async deleteGratuityType(gratuitytypeId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuityType/${gratuitytypeId}`).toPromise();
    }

    async getGratuitySlabGratuities() {

        return await this.ApiService.get(`${this.baseUrl}/GetGratuitySlabGratuities`).toPromise();
    }


    async addGratuitySlabGratuity(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddGratuitySlabGratuity`, data).toPromise();
    }

    async updateGratuitySlabGratuity(data) {

        let gratuityslabGratuity = await this.getdataToUpdate(data.key, 'GetGratuitySlabGratuity');
        gratuityslabGratuity = { ...gratuityslabGratuity, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateGratuitySlabGratuity`, gratuityslabGratuity).toPromise();
    }

    async deleteGratuitySlabGratuity(gratuityslabGratuityId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteGratuitySlabGratuity/${gratuityslabGratuityId}`).toPromise();
    }

    async getLeavingReasons() {

        return await this.ApiService.get(`${this.baseUrl}/GetLeavingReasons`).toPromise();
    }

    async addLeavingReason(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddLeavingReason`, data).toPromise();
    }

    async updateLeavingReason(data) {

        let leavingreason = await this.getdataToUpdate(data.key, 'GetLeavingReason');
        leavingreason = { ...leavingreason, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavingReason`, leavingreason).toPromise();
    }

    async deleteLeavingReason(leavingreasonId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavingReason/${leavingreasonId}`).toPromise();
    }

    async getMasterPayrolls() {

        return await this.ApiService.get(`${this.baseUrl}/GetMasterPayrolls`).toPromise();
    }
   
     getMasterPayroll(id) : Observable<MasterPayroll>{

        return this.ApiService.get(this.baseUrl +'/GetMasterPayroll' + id);
    }

    async addMasterPayroll(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddMasterPayroll`, data).toPromise();
    }

     updateMasterPayroll(data: MasterPayroll) : Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/UpdateMasterPayroll`, data);
    }

    async deleteMasterPayroll(masterpayrollId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayroll/${masterpayrollId}`).toPromise();
    }


    async getMasterPayrollDetails() {

        return await this.ApiService.get(`${this.baseUrl}/GetMasterPayrollDetails`).toPromise();
    }


    async addMasterPayrollDetail(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddMasterPayrollDetail`, data).toPromise();
    }

    async updateMasterPayrollDetail(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateMasterPayrollDetail`, data).toPromise();
    }

    async deleteMasterPayrollDetail(masterdetailId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteMasterPayrollDetail/${masterdetailId}`).toPromise();
    }


    async getPayrolls() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrolls`).toPromise();
    }

    async addPayroll(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayroll`, data).toPromise();
    }

    async updatePayroll(data) {

        let payroll = await this.getdataToUpdate(data.key, 'GetPayroll');
        payroll = { ...payroll, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayroll`, payroll).toPromise();
    }

    async deletePayroll(payrollId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayroll/${payrollId}`).toPromise();
    }

    async getPayrollBanks() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrollBanks`).toPromise();
    }

    async addPayrollBank(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayrollBank`, data).toPromise();
    }

    async updatePayrollBank(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollBank`, data).toPromise();
    }

    async deletePayrollBank(payrollbankId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollBank/${payrollbankId}`).toPromise();
    }

    async getPayrollTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrollTypes`).toPromise();
    }

    async addPayrollType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayrollType`, data).toPromise();
    }

    async updatePayrollType(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollType`, data).toPromise();
    }

    async deletePayrollType(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollType/${id}`).toPromise();
    }


    async getPayrollYears() {

        return await this.ApiService.get(`${this.baseUrl}/GetPayrollYears`).toPromise();
    }


    async addPayrollYear(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPayrollYear`, data).toPromise();
    }

    async updatePayrollYear(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdatePayrollYear`, data).toPromise();
    }

    async deletePayrollYear(payrollyearId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePayrollYear/${payrollyearId}`).toPromise();
    }


    async getPfPayments() {

        return await this.ApiService.get(`${this.baseUrl}/GetPfPayments`).toPromise();
    }


    async addPfPayment(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddPfPayment`, data).toPromise();
    }

    async updatePfPayment(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdatePfPayment`, data).toPromise();
    }

    async DeletePfPayment(pfpaymentId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeletePfPayment/${pfpaymentId}`).toPromise();
    }

    async getSalaryCalculationTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetSalaryCalculationTypes`).toPromise();
    }


    async addSalaryCalculationType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddSalaryCalculationType`, data).toPromise();
    }

    async updateSalaryCalculationType(data) {

        let salarycalculationtype = await this.getdataToUpdate(data.key, 'GetSalaryCalculationType');
        salarycalculationtype = { ...salarycalculationtype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryCalculationType`, salarycalculationtype).toPromise();
    }

    async deleteSalaryCalculationType(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryCalculationType/${id}`).toPromise();
    }

    async getSalaryStructures() {

        return await this.ApiService.get(`${this.baseUrl}/GetSalaryStructures`).toPromise();
    }


    async addSalaryStructure(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddSalaryStructure`, data).toPromise();
    }

    async updateSalaryStructure(data) {

        let salarystructure = await this.getdataToUpdate(data.key, 'GetSalaryStructure');
        salarystructure = { ...salarystructure, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryStructure`, salarystructure).toPromise();
    }

    async deleteSalaryStructure(salarystructureId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryStructure/${salarystructureId}`).toPromise();
    }

    async getSalaryStructureDetails() {

        return await this.ApiService.get(`${this.baseUrl}/GetSalaryStructureDetails`).toPromise();
    }

    async addSalaryStructureDetail(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddSalaryStructureDetail`, data).toPromise();
    }

    async updateSalaryStructureDetail(data) {

        let salarystructuredetail = await this.getdataToUpdate(data.key, 'GetSalaryStructureDetail');
        salarystructuredetail = { ...salarystructuredetail, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateSalaryStructureDetail`, salarystructuredetail).toPromise();
    }

    async deleteSalaryStructureDetail(salarystructuredetailId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteSalaryStructureDetail/${salarystructuredetailId}`).toPromise();
    }

    async getUserSalaries() {

        return await this.ApiService.get(`${this.baseUrl}/GetUserSalaries`).toPromise();
    }

    async addUserSalary(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddUserSalary`, data).toPromise();
    }

    async updateUserSalary(data) {

        let usersalary = await this.getdataToUpdate(data.key, 'GetUserSalary');
        usersalary = { ...usersalary, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserSalary`, usersalary).toPromise();
    }

    async deleteUserSalary(usersalaryId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserSalary/${usersalaryId}`).toPromise();
    }

    async getIncomeTaxRules() {

        return await this.ApiService.get(`${this.baseUrl}/GetIncomeTaxRules`).toPromise();
    }

    async addIncomeTaxRule(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddIncomeTaxRule`, data).toPromise();
    }

    async updateIncomeTaxRule(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateIncomeTaxRule`, data).toPromise();
    }

    async Deleteincometaxrule(incometaxruleId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteIncomeTaxRule/${incometaxruleId}`).toPromise();
    }


    async getTaxableIncomeAdjustments() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxableIncomeAdjustments`).toPromise();
    }

    async addTaxableIncomeAdjustment(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxableIncomeAdjustment`, data).toPromise();
    }

    async updateTaxableIncomeAdjustment(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxableIncomeAdjustment`, data).toPromise();
    }

    async deleteTaxableIncomeAdjustment(taxableincomeadjustmentId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxableIncomeAdjustment/${taxableincomeadjustmentId}`).toPromise();
    }

    async getTaxAdjustmentReasons() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxAdjustmentReasons`).toPromise();
    }


    async addTaxAdjustmentReason(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxAdjustmentReason`, data).toPromise();
    }

    async updateTaxAdjustmentReason(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxAdjustmentReason`, data).toPromise();
    }

    async DeleteTaxAdjustmentReason(taxadjustmentreasonId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxAdjustmentReason/${taxadjustmentreasonId}`).toPromise();
    }

    async getTaxBenefits() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxBenefits`).toPromise();
    }

    async addTaxBenefit(data) {

        let newtaxbenefit = await this.ApiService.post(`${this.baseUrl}/AddTaxBenefit`, data).toPromise();
    }

    async updateTaxBenefit(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxBenefit`, data).toPromise();
    }

    async DeleteTaxBenefit(taxbenefitId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxBenefit/${taxbenefitId}`).toPromise();
    }

    async getTaxReliefs() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxReliefs`).toPromise();
    }

    async addTaxRelief(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxRelief`, data).toPromise();
    }

    async updateTaxRelief(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxRelief`, data).toPromise();
    }

    async deleteTaxRelief(taxreliefId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxRelief/${taxreliefId}`).toPromise();
    }

    async getTaxSchedules() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxSchedules`).toPromise();
    }


    async addTaxSchedule(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxSchedule`, data).toPromise();
    }

    async updateTaxSchedule(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxSchedule`, data).toPromise();
    }

    async deleteTaxSchedule(taxscheduleId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxSchedule/${taxscheduleId}`).toPromise();
    }


    async gettTaxYears() {

        return await this.ApiService.get(`${this.baseUrl}/GetTaxYears`).toPromise();
    }

    async addtTaxYear(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddTaxYear`, data).toPromise();
    }

    async updateTaxYear(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateTaxYear`, data).toPromise();
    }

    async deleteTaxYear(taxyearId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteTaxYear/${taxyearId}`).toPromise();
    }

    async getLoanTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetLoanTypes`).toPromise();
    }

    async addLoanType(data) {

        let newloantype = await this.ApiService.post(`${this.baseUrl}/AddLoanType`, data).toPromise();
    }

    async updateLoanType(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateLoanType`, data).toPromise();
    }

    async deleteLoanType(loantypeId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteLoanType/${loantypeId}`).toPromise();
    }

    async getUserLoans() {

        return await this.ApiService.get(`${this.baseUrl}/GetUserLoans`).toPromise();
    }


    async addUserLoan(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddUserLoan`, data).toPromise();
    }

    async updateUserLoan(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateUserLoan`, data).toPromise();
    }

    async deleteUserLoan(userloanId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserLoan/${userloanId}`).toPromise();
    }

}
