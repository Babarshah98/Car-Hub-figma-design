import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { getCars } from "../../utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "../../constant";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}:any) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || '',
    fuel: searchParams.fuel || '',
    year: searchParams.year || 2022,
    limit: searchParams.limit || 10,
    model: searchParams.modal || ''
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 px py max-w" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like!</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year " options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__car-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car} car={car}/>
              ))}
            </div>
            <ShowMore
            pageNumber={(searchParams.limit || 10)/10}
            isNext={(searchParams.limit || 10) > allCars?.length}
            /> 
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
