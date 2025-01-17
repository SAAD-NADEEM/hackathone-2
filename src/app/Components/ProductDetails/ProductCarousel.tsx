"use client";

import Image from "next/image";
import { useState } from "react";

function ProductCarousel() {

    const [mainImage, setMainImage] = useState('/View.png');
    const thumbnails = ['/View.png', '/View2.png', '/View3.png'];

    return (
        <div>
            <div className="w-[327px] h-[232px] | | lg:w-[492px] lg:h-[360px]">
                <Image src={mainImage} alt="product picture one"
                    height={360} width={492} className="h-full w-full" />
            </div>
            <div className="flex justify-between mt-6 gap-[20px] | | lg:mt-6 lg:gap-6">
                {thumbnails.map((thumbnail, index) => (
                    <Image key={index} src={thumbnail} alt="view picture 1" width={96} height={64} className={`flex-1 h-16 lg:h-[124px] rounded-lg cursor-pointer ${thumbnail === mainImage ? 'border-2 border-prm-500 p-[2px]' : ''}`}
                    onClick={() => setMainImage(thumbnail)}
                     />
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;