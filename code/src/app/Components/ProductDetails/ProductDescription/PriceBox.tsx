import Link from "next/link";
import Button from "../../Utils/Button";
import { createSlug } from "../../Utils/libs";

interface Price {
    pricePerDay?: string;
    originalPrice?: string | null;
}

function PriceBox({ price, id }: { price: Price, id: string }) {

    return (
        <div className="flex justify-between items-center mt-4">
            <div>
                <p className="font-bold text-body text-second-500 tracking-[-1%] leading-5 | md:leading-6 | lg:leading-6">{price.pricePerDay}/
                    <span className="font-bold text-small text-second-300 tracking-[-1%]">days</span>
                </p>
                {
                    price.originalPrice && <p className="line-through font-medium text-small text-second-300 tracking-[-1%] leading-[15.12px] | lg:font-bold lg:leading-5">
                        {price.originalPrice}
                    </p>
                }
            </div>
            <Link href={{
                pathname: `/${createSlug(id)}/form`,
                query: { id },
            }}>
                <Button state="primary" className="text-paragragh h-9 w-[100px] rounded | md:h-11 md:w-[116px] | lg:h-11 lg:w-[116px]">Rental Now</Button>
            </Link>
        </div>
    );
};

export default PriceBox;