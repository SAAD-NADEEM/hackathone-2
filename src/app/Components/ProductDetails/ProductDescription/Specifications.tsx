

function Specifications({ specs }: any) {


    return (
        <div className="flex gap-11">
            <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">TypeCar</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">Sport</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">Steering</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">Manual</p>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">Capacity</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">2 Persons</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:font-normal lg:text-xl lg:leading-7">Gasoline</p>
                    <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-500 | lg:font-semibold lg:text-xl lg:leading-7">70L</p>
                </div>
            </div>
        </div>
    );
};

export default Specifications;