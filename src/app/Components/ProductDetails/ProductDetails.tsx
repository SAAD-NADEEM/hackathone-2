import ProductCarousel from "./ProductCarousel";
import ProductDescription from "./ProductDescription/ProductDescription";

function ProductDetails() {

    return (
        <section className="flex flex-col w-full gap-8 | md:flex-row | lg:flex-row">
            <ProductCarousel />
            <ProductDescription />
        </section>
    );
};

export default ProductDetails;