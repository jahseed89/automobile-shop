import { MouseEventHandler } from "react";

export interface CustumButtonProps {
    title: string;
    btnType?: 'button' | 'submit';
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}