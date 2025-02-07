"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Label({ text, quantity, category, checked, onChange }: { 
    text: string, 
    quantity: string, 
    category: string, 
    checked: boolean, 
    onChange: (checked: boolean) => void 
}) {


    return (
        <li>
             <Checkbox 
                id={text}
                checked={checked}
                onCheckedChange={onChange}
                className="data-[state=checked]:bg-prm-500 data-[state=checked]:border-prm-500 border-second-300" />
            <label htmlFor={text} className="ml-2 font-semibold text-[20px] leading-6 tracking-[-2%] text-justify text-second-400">
                {text}
                <span className="ml-1 text-second-300">{quantity}</span>
            </label>
        </li>
    );
}


function SideBar() {

    const searchParams = useSearchParams();
    const router = useRouter();


    const handleFilterChange = (category: string, value: string, checked: boolean) => {
        const params = new URLSearchParams(searchParams.toString());
        const currentValues = params.getAll(category);

        if (checked) {
            currentValues.push(value);
        } else {
            const index = currentValues.indexOf(value);
            if (index > -1) {
                currentValues.splice(index, 1);
            }
        }

        params.delete(category);
        currentValues.forEach(val => params.append(category, val));

        router.replace(`?${params.toString()}`, { scroll: false });
    };


    const data1 = [{ text: 'Sport', quantity: '(19)' },
    { text: 'SUV', quantity: '(12)' },
    { text: 'MPV', quantity: '(15)' },
    { text: 'Sedan', quantity: '(20)' },
    { text: 'Coupe', quantity: '(14)' },
    { text: 'Hatchback', quantity: '(14)' }
    ]
    const data2 = [
        { text: '2 People', quantity: '(10)' },
        { text: '4 People', quantity: '(14)' },
        { text: '5 People', quantity: '(12)' },
        { text: '7 People', quantity: '(12)' },
    ]

    return (
        <aside className="h-full w-[25vw] max-w-[360px] p-8 bg-bg-500 hidden | lg:block">
            <div>
                <h2 className="font-semibold text-xs leading-5 tracking-[-2%] text-second-300">TYPE</h2>
                <ul className="flex flex-col gap-8 mt-7">
                    {data1.map((text, index) => (
                        <Label key={index}
                            text={text.text}
                            quantity={text.quantity}
                            category="type"
                            checked={searchParams.getAll('type').includes(text.text)}
                            onChange={(checked: any) => handleFilterChange('type', text.text, checked)} />
                    ))}

                </ul>
                <h2 className="font-semibold text-xs leading-5 tracking-[-2%] text-second-300 mt-[56px]">CAPACITY</h2>
                <ul className="flex flex-col gap-8 mt-7">
                    {data2.map((text, index) => (
                        <Label key={index}
                        text={text.text}
                        quantity={text.quantity}
                        category="capacity"
                        checked={searchParams.getAll('capacity').includes(text.text)}
                        onChange={(checked: any) => handleFilterChange('capacity', text.text, checked)} />
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="font-semibold text-xs leading-5 tracking-[-2%] text-second-300 mt-[56px] mb-7">CAPACITY</h2>
                <Slider defaultValue={[70]} max={100} step={1} className="bg-second-300 rounded-full" />
                <p className="font-semibold text-xl leading-[24px] tracking-[-2%] text-second-400 mt-3">Max. $100.00</p>
            </div>
        </aside>
    );
};

export default SideBar;