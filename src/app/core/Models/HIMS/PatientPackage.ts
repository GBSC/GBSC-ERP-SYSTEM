export interface PatientPackage {
    patientPackageId: number,
    lastPaymentDate: Date,
    lastPaidAmount: number,
    totalPrice: number,
    totalAmountPaid: number,
    totalBalance: number,
    patientId: number,
    packageId: number
}