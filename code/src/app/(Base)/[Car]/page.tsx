import ProductDetails from "@/app/Components/ProductDetails/ProductDetails";

type PageProps = {
    searchParams: {
        id: string;
    };
};

function page(props: PageProps) {

    const productId: string = props.searchParams.id

    return (
        <div className="flex-1 flex flex-col gap-8 max-w-[1016px] mx-auto lg:mx-8 my-8">
            <ProductDetails productId={productId}/>
        </div>
    );
};

export default page;