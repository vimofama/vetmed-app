export type Clinic = {
    id: string;
    name: string;
    statusLabel: string;
    statusTone: "secondary" | "warning";
    address: string;
    distanceKm: number;
    stockLabel: string;
    stockTone: "secondary" | "warning";
    price: string;
    url: string;
};

export const clinicData: Clinic[] = [
    {
        id: "la-mariscal",
        name: "Veterinaria La Mariscal",
        statusLabel: "Stock Disponible",
        statusTone: "secondary",
        address: "Av. Amazonas y Robles, Quito",
        distanceKm: 1.2,
        stockLabel: "24 unidades",
        stockTone: "secondary",
        price: "$8.50",
        url: "/comercio/clinica",
    },
    {
        id: "cumbaya",
        name: "Clinica Vet Cumbaya",
        statusLabel: "Stock Limitado",
        statusTone: "warning",
        address: "Plaza Cumbaya, Local 4",
        distanceKm: 4.8,
        stockLabel: "5 unidades",
        stockTone: "warning",
        price: "$10.20",
        url: "/comercio/clinica",
    },
    {
        id: "hospital-norte",
        name: "Hospital Vet del Norte",
        statusLabel: "Stock Disponible",
        statusTone: "secondary",
        address: "Calle de los Eucaliptos E12",
        distanceKm: 6.1,
        stockLabel: "50+ unidades",
        stockTone: "secondary",
        price: "$7.90",
        url: "/comercio/clinica",
    },
];
