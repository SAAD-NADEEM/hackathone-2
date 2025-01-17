import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./Utils/ProductCard";

interface CarData {
    name: string;
    type: string;
    litres: string;
    seats: string;
    price: number;
    discountPrice?: number;
    src: string;
}

function PopularCars() {

    const carData: CarData[] = [
        {
            name: 'Koenigsegg',
            type: 'Sport',
            litres: '90L',
            seats: '2 People',
            price: 99.00,
            discountPrice: 100.00,
            src: '/car.png'
        },
        {
            name: 'Nissan GT-R',
            type: 'Sport',
            litres: '80L',
            seats: '2 People',
            price: 80.00,
            discountPrice: 100.00,
            src: '/car1.png'
        },
        {
            name: 'Rolls-Royce',
            type: 'Sedan',
            litres: '70L',
            seats: '4 People',
            price: 96.00,
            src: '/car2.png'
        },
        {
            name: 'Nissan GT-R',
            type: 'Sport',
            litres: '80L',
            seats: '2 People',
            price: 80.00,
            discountPrice: 100.00,
            src: '/car1.png'
        },
    ];


    return (
        <section className="w-full h-auto lg:h-auto my-8">
            <div className="flex justify-between">
                <h2 className="font-semibold cursor-pointer text-heading-200 leading-[21px] tracking-[-2%] text-second-300">Popular Car</h2>
                <Link href="/category"><p className="text-paragraph leading-[15.12px] text-prm-500 font-semibold">View All</p></Link>
            </div>
            <div className="overflow-hidden -mr-[24px] md:-mr-0 lg:-mr-0 mt-[20px]">
                <Carousel opts={{ align: "start" }} className="w-[499px] md:w-auto lg:w-auto">
                    <CarouselContent className="-ml-[20px] md:-ml-10 lg:-ml-8">
                        {carData.map((car, index) => (
                            <CarouselItem key={index} className="px-[19px] basis-2/4 | md:px-10 | lg:basis-1/3 lg:px-8 | xl:basis-1/4">
                                <ProductCard name={car.name}
                                            type={car.type}
                                            litres={car.litres}
                                            seats={car.seats}
                                            price={car.price}
                                            discountPrice={car.discountPrice}
                                            src={car.src}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default PopularCars;