"use client"

import { useState } from "react";
import GoldStar from "../Icons/GoldStar";
import GreyStar from "../Icons/GreyStar";

function Rating({ initialRating }: { initialRating: number }) {

    const [rating, SetRating] = useState(initialRating)

    return (
        <div className="flex">
            {
                [1, 2, 3, 4, 5].map((value) => (

                    <>
                        {
                            value <= rating ? <GoldStar /> : <GreyStar />
                        }
                    </>
                ))
            }
        </div>
    )
}
 export default Rating;