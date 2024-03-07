import { CarProps, FilterProps } from "../types";

export async function getCars(filter:FilterProps) {
    const {manufacturer, model, year, fuel, limit} = filter;
    const headers= {
        'X-RapidAPI-Key':  '5a826b8901mshdcbbd9406e258efp1d87cajsn32905aa7921b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'}
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    const response = await fetch(url,
        {headers:headers})
    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


  export const generateCarImagesUrl= (car:CarProps, angle?:string) =>
{

    const url = new URL ("https://cdn.imagin.studio/getimage");
    const {make, model, year} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append("make", make)
    url.searchParams.append("model", model)
    url.searchParams.append("modalFamily", model.split('')[0])
    url.searchParams.append("zoomType", "full creen")
    url.searchParams.append("modelYear", `${year}`)
    url.searchParams.append("angle", `${angle}`)
    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };