import Link from "next/link";
import ProductCard from "./Utils/ProductCard";
import Button from "./Utils/Button";

interface CarData {
    name: string;
    type: string;
    litres: string;
    seats: string;
    price: number;
    discountPrice?: number;
    src: string;
}

function RecomendationCar({ className, cols, pageType }: { className?: string, cols: string, pageType?: "home" | "category" }) {

    const carData: CarData[] = [
        {
            name: 'All New Rush',
            type: 'SUV',
            litres: '70L',
            seats: '6 People',
            price: 72.00,
            discountPrice: 0.00,
            src: '/car3.png'
        },
        {
            name: 'CR-V',
            type: 'SUV',
            litres: '80L',
            seats: '6 People',
            price: 80.00,
            src: '/car4.png'
        },
        {
            name: 'All New Terios',
            type: 'SUV',
            litres: '90L',
            seats: '4 People',
            price: 74.00,
            src: '/car5.png'
        },
        {
            name: 'CR-V',
            type: 'SUV',
            litres: '80L',
            seats: '5 People',
            price: 80.00,
            src: '/car6.png'
        },
        {
            name: 'MG ZX Exclusice',
            type: 'Hatchback',
            litres: '70L',
            seats: '4 People',
            price: 76.00,
            discountPrice: 80.00,
            src: '/car7.png'
        },
        {
            name: 'New MG ZS',
            type: 'SUV',
            litres: '80L',
            seats: '4 People',
            price: 80.00,
            src: '/car8.png'
        },
        {
            name: 'MG ZX Excite',
            type: 'Hatchback',
            litres: '70L',
            seats: '4 People',
            price: 74.00,
            src: '/car7.png'
        },
        {
            name: 'New MG ZS',
            type: 'SUV',
            litres: '80L',
            seats: '6 People',
            price: 80.00,
            src: '/car9.png'
        },
    ];



    return (
        <section className="w-full h-auto lg:h-auto my-8">
            <div className={`${className} flex justify-between`}>
                <h2 className="font-semibold cursor-pointer text-heading-200 leading-[21px] tracking-[-2%] text-second-300">Popular Car</h2>
            </div>
            <div className={`mt-[20px] place-items-center p-0 gap-8 grid grid-cols-1 min-w-full | md:grid-cols-2 ${cols}`}>
                {carData.map((car, index) => (
                    <ProductCard key={index}
                        variant="wide"
                        pageType={pageType}
                        name={car.name}
                        type={car.type}
                        litres={car.litres}
                        seats={car.seats}
                        price={car.price}
                        discountPrice={car.discountPrice}
                        src={car.src}
                    />
                ))}
            </div>
            <footer className="mt-12 lg:mt-16 flex justify-between items-center">
                <div className="flex-grow text-center">
                    <Button state="primary" className="px-6 py-2 text-bg-500 font-medium rounded text-paragragh">
                        Load More
                    </Button>
                </div>
                <Link href={'/category'} className="text-second-300 text-small font-medium cursor-pointer">
                    View All
                </Link>
            </footer>
        </section>
    );
};

export default RecomendationCar;
