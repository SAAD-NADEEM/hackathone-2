import HeroWrapper from "../Components/Hero/HeroWrapper";
import PopularCars from "../Components/PopularCars";
import RecomendationCar from "../Components/RecomendationCar";

function page() {

  return (
    <main className="ctn-width-home h-auto mx-auto | lg:my-8">
      <HeroWrapper />
      <div className="absolute inset-0 h-[288px] w-full bg-bg-500 -z-10 lg:hidden"></div>
      <PopularCars />
      <RecomendationCar fetchType="recommended" cols="lg:grid-cols-3 xl:grid-cols-4"/>
    </main>
  );
};

export default page;