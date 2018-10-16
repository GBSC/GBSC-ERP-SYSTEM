import { GratuitySlabGratuity } from "./gratuitySlabGratuity";

export class GratuitySlab {

    gratuitySlabId: number;
    title: string;
    employmentDaysFrom: number;
    employmentDaysTill: number;
    multiplicationFactor: number;
    gratuitySlabGratuities: GratuitySlabGratuity[];
}