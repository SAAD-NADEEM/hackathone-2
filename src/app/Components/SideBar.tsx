import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

function Label({ text, quatity }: { text: string, quatity: string }) {
    return (
        <li>
            <Checkbox id={text} className="data-[state=checked]:bg-prm-500 data-[state=checked]:border-prm-500 border-second-300" />
            <label htmlFor={text} className="ml-2 font-semibold text-[20px] leading-6 tracking-[-2%] text-justify text-second-400">
                {text}
                <span className="ml-1 text-second-300">{quatity}</span>
            </label>
        </li>
    );
}


function SideBar() {

    const data1 = [{ text: 'Sprout', quantity: '(19)' },
    { text: 'SUV', quantity: '(12)' },
    { text: 'MPV', quantity: '(15)' },
    { text: 'Sedan', quantity: '(20)' },
    { text: 'Coupe', quantity: '(14)' },
    { text: 'Hatchback', quantity: '(14)' }
    ]
    const data2 = [
        { text: '2 Person', quantity: '(10)' },
        { text: '4 Person', quantity: '(14)' },
        { text: '6 Person', quantity: '(12)' },
        { text: '8 or More', quantity: '(16)' },
    ]

    return (
        <aside className="h-full w-[360px] p-8 bg-bg-500 hidden | lg:block">
            <div>
                <h2 className="font-semibold text-xs leading-5 tracking-[-2%] text-second-300">TYPE</h2>
                <ul className="flex flex-col gap-8 mt-7">
                    {data1.map((text, index) => (
                        <Label key={index} text={text.text} quatity={text.quantity} />
                    ))}

                </ul>
                <h2 className="font-semibold text-xs leading-5 tracking-[-2%] text-second-300 mt-[56px]">CAPACITY</h2>
                <ul className="flex flex-col gap-8 mt-7">
                    {data2.map((text, index) => (
                        <Label key={index} text={text.text} quatity={text.quantity} />
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="font-semibold text-xs leading-5 tracking-[-2%] text-second-300 mt-[56px] mb-7">CAPACITY</h2>
                <Slider defaultValue={[70]} max={100} step={1} className="bg-second-300 rounded-full"/>
                <p className="font-semibold text-xl leading-[24px] tracking-[-2%] text-second-400 mt-3">Max. $100.00</p>
            </div>
        </aside>
    );
};

export default SideBar;