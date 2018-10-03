export interface DeliveryNote {
    DeliveryChallanId: number,
    ChallanNumber: string,
    Date: Date,
    Remarks: string,
    DeliveryOrderId: number,
    TransportId: number,
    SalesInvoiceId: number
}