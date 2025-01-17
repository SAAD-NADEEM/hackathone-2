

import CommentsWrapper from "@/app/Components/ProductComments/CommentsWrapper";
import ProductDetails from "@/app/Components/ProductDetails/ProductDetails";

function page() {

    return (
        <div className="flex-1 flex flex-col gap-8 m-auto my-8 lg:mr-[34px]">
            <ProductDetails />
            <CommentsWrapper />
        </div>
    );
};

export default page;