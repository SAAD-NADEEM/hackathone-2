import RecomendationCar from "@/app/Components/RecomendationCar";
import SelectionWrapper from "@/app/Components/Selection/SelectionWrapper";
import SideBar from "@/app/Components/SideBar";

function page() {

    return (
            <div className="flex-1 m-auto my-8 lg:mr-[34px]">
                <SelectionWrapper className="w-full lg:max-w-[486px]" />
                <section className="">
                    <RecomendationCar className="hidden" pageType="category" cols="lg:grid-cols-2 xl:grid-cols-3" />
                </section>
            </div>
    );
};

export default page;