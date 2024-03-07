import {MouseEventHandler} from "react"

export interface CustomButtonProps {
    title:string
    containerStyles?:string
    Handleclick?:
    MouseEventHandler<HTMLButtonElement>
    rightIcon?:string;
    textStyles?:string;
    IsDisabled?:boolean;
    btnType?: 'button' | 'submit'

}

export interface SearchManufacturerProps {
    manufacturer:string
    setManufacturer:(manufacturer:string)=>void
}
export interface FilterProps{
    manufacturer: string
    fuel: string
    year: number
    limit: number
    model: string
}

export interface CarProps{
    
        "city_mpg": number;
        "class": string;
        "combination_mpg": number;
        "cylinders": number;
        "displacement": number;
        "drive": string;
        "fuel_type": string;
        "highway_mpg": number;
        "make": string;
        "model": string;
        "transmission": string;
        "year": number;
    
}

export interface OptionProps{
    title:string
    value:string}

export interface CustomFilterProps{
    title:string
    options:OptionProps[]
}

export interface showMoreProps {
    pageNumber:number
    isNext:boolean
}