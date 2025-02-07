import RecomendationCar from "@/app/Components/RecomendationCar";


function page({ params }: { params: { category: string } }) {

    console.log(params)
    return (
            <div className="flex-1 my-8 ">
                <section>
                    <RecomendationCar fetchType={`categories/${params.category}`} className="hidden" pageType="category" cols="lg:grid-cols-2 xl:grid-cols-3" />
                </section>
            </div>
    );
};

export default page;