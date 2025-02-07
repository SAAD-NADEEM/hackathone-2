import Swap from "../Icons/Swap";
import PickUp from "./PickUp";


function Pick() {

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="16" height="16" rx="8" fill="#3563E9" fillOpacity="0.3" />
            <circle cx="8" cy="8" r="4" fill="#3563E9" />
        </svg>
    );
};
function Drop() {

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="16" height="16" rx="8" fill="#5CAFFC" fillOpacity="0.3" />
            <circle cx="8" cy="8" r="4" fill="#54A6FF" />
        </svg>
    );
};



function SelectionWrapper({className} :{className :string}) {

    return (
        <section className="flex flex-col relative my-8 rounded-lg gap-8 justify-between items-center |  | lg:gap-8 lg:flex-col | xl:gap-0 xl:flex-row">
            <PickUp h1="Pick - Up" Icon={Pick} className={className} />
            <div className="absolute inset-0 h-[60px] m-auto w-[60px] shadow-swap flex justify-center items-center bg-prm-500 rounded-lg">
                <Swap />
            </div>
            <PickUp h1="Drop - Off" Icon={Drop} className={className}/>
        </section>
    );
};

export default SelectionWrapper;

