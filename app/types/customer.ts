export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    points: number;
    rewards: Reward[];
    lastVisit: string;
}

export interface Reward {
    id: string;
    name: string;
    description: string;
    pointsRequired: number;
    isRedeemed: boolean;
    redeemedAt?: string;
}

export interface CustomerFormData {
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
} 