export interface SalesIndentItem {
    salesIndentItemId: number,
    quantity: number,
    tradeOfferPricePerUnit: number,
    totalTradeOfferPerItem: number,
    totalTradePricePerItem: number,
    salesIndentId: number,
    iventoryItemId: number,
    inventoryId: number,

    dosage : number,
    treatmentStart : Date,
    treatmentEnd : Date,
    treatmentTimeInDays : number,
    isPaid : boolean
}