export interface IconProps {
    className?: string;
}

export interface ButtonProps {
    children: React.ReactNode;  
    onClick?: () => void; 
    className?: string;
    state: string; 
}
export interface OrderFormData {
    pickupDate: string;  
    dropoffDate: string;
    carId: string | null; 
}

export interface Car {
    _id: string;
    _type: string;
    name: string;
    brand: string | null;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    originalPrice: string | null;
    tags: string[];
    images: string[];
    info: string;
}