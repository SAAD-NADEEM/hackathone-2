export interface IconProps {
    className?: string;
}

export interface ButtonProps {
    children: React.ReactNode;  
    onClick?: () => void; 
    className?: string;
    state: string; 
}