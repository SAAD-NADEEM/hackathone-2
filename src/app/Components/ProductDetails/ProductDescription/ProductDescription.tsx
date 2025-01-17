import PriceBox from "./PriceBox";
import Specifications from "./Specifications";
import ProductTitle from "./Title";

function ProductDescription() {

    return (
        <div className="w-[327px] h-[318px] rounded-lg bg-bg-500 flex flex-col justify-between p-4 | md:p-6 | lg:p-6 lg:w-[492px] lg:h-[508px] ">
            <ProductTitle/>
            <p className="font-normal text-xs leading-6 tracking-[-2%] text-second-300 | lg:text-xl lg:leading-10">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
            <Specifications/>
            <PriceBox/>
        </div>
    );
};

export default ProductDescription;