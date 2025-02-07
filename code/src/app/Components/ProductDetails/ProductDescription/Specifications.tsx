
interface Specs {
    type: string | undefined;
    fuelCapacity: string | undefined;
    seatingCapacity: string | undefined;
    transmission: string | undefined;
}

function Specifications({ specs }: { specs: Specs }) {


    return (
        <div className="flex gap-11">
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">TypeCar</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">{specs.type}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">Steering</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">{specs.transmission}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">Capacity</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">{specs.seatingCapacity}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">Gasoline</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">{specs.fuelCapacity}</p>
                </div>
            </div>
        </div>
    );
};

export default Specifications;