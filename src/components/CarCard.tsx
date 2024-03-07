"use client";
import { useState } from "react";
import { CarProps } from "../../types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImagesUrl } from "../../utils";
import Image from "next/image";
import CarDetail from "./CarDetail";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { make, model, transmission, year, city_mpg, drive } = car;
  const CarRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
      <span className="self-start text-[14px] font-semibold">$</span>
        {CarRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 py-3 object-contain">
        <Image src={generateCarImagesUrl(car)} 
        className="object-contain" 
        priority 
        alt="u"
        fill />
        
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-600">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={'/steering-wheel.svg'}
                height={20}
                width={20}
                alt="steering wheel"/>
                <p className="text-[14px]">
                    {transmission === 'a' ? 'Automatic' :
                    'Manual'}
                </p>
                
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={'/tire.svg'}
                height={20}
                width={20}
                alt="steering wheel"/>
                <p className="text-[14px]">
                    {drive.toUpperCase()}
                </p>
                
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={'/gas.svg'}
                height={20}
                width={20}
                alt="steering wheel"/>
                <p className="text-[14px]">
                    {city_mpg} MPG
                </p>
                
            </div>
        </div>
        <div className="car-card__btn-container">
            <CustomButton  title="View More"
            containerStyles="bg-primary-blue w-full py-[16px] rounded-full"
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            Handleclick={() => setIsOpen(true)}
            />
        </div>
      </div>
      <CarDetail  isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>

    </div>
  );
};

export default CarCard;
