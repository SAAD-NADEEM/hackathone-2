import Image from "next/image";
import Rating from "../Utils/Rating";

function CommentsBox() {

    return (
        <div className="flex gap-2 mb-6 | md:gap-4 md:mb-[20px] | lg:gap-4">
            <div className="h-11 w-11 | md:h-14 md:w-14 | lg:h-14 lg:w-14">
                <Image src={'/profill.png'} className="h-full w-full" alt="profile image of the comment person" height={56} width={56} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between">
                    <div>
                        <h1 className="pb-4 font-semibold text-base leading-5 tracking-[-2%] text-second-500 | md:font-bold md:leading-7 md:tracking-[-3%]">Alex Stanton</h1>
                        <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | md:text-sm md:leading-5">CEO at Bukalapak</p>
                    </div>

                    <div>
                        <p className="pb-4 font-medium text-xs leading-4 tracking-[-2%] text-second-300 text-right | md:text-sm md:leading-5">21 July 2022</p>
                        <div className="content-end">
                            <Rating initialRating={4} />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <p className="text-xs leading-6 tracking-[-2%] text-second-300 | md:text-sm md:leading-7">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                </div>
            </div>
        </div>
    );
};

export default CommentsBox;