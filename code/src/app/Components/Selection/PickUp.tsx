import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Pick from "../Icons/Pick";
import { Separator } from "@/components/ui/separator";

interface Props {
    h3: string,
    p1: string,
    p2: string,
}

function Container({ h3, p1, p2, }: Props) {
    return (
        <div className="flex-grow flex-shrink-0">
            <h3 className="font-bold text-base leading-[20px] tracking-[-2%] text-second-500 mb-2">{h3}</h3>
            <Accordion type="multiple" >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="p-0 w-full">
                        <p className="hidden font-normal text-xs leading-[15.12px] tracking-[-1%] text-second-300 | md:block | lg:block">{p1}</p>
                        <p className="block font-normal text-xs leading-[15.12px] tracking-[-1%] text-second-300 | md:hidden | lg:hidden">{p2}</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        {p2}
                    </AccordionContent>
                    <AccordionContent>
                        {p2}
                    </AccordionContent>
                    <AccordionContent>
                        {p2}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

interface Data {
    h1: string
    Icon: React.ComponentType,
    className: string
}

function PickUp({h1,Icon, className} :Data) {

    return (
        <div className={`${className} p-4 h-[120px] flex flex-col bg-bg-500 rounded-lg | | lg:py-6 lg:px-12  lg:min-h-[136px]`}>
            <div className="flex items-center gap-2">
                {Icon && <Icon />}
                <h1 className="font-semibold text-base leading-[20px] tracking-[-2%] text-second-500">{h1}</h1>
            </div>
            <div className="mt-6 flex w-full h-full">
                <Container h3="Locations" p1="Select your city" p2="Semarang" />

                    <Separator orientation="vertical" className="bg-bor h-full mx-[20px] | lg:mx-6"/>

                <Container h3="Date" p1="Select your date" p2="21 July 2022" />
                
                    <Separator orientation="vertical" className="bg-bor h-full mx-[20px] | lg:mx-6"/>

                <Container h3="Time" p1="Select your time" p2="01.00" />
            </div>
        </div>
    );
};

export default PickUp;