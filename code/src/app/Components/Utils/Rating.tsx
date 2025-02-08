import React from 'react';
import GoldStar from "../Icons/GoldStar";
import GreyStar from "../Icons/GreyStar";

function Rating({ initialRating }: { initialRating: number }) {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((value) => (
                <React.Fragment key={value}>
                    {value <= initialRating ? <GoldStar /> : <GreyStar />}
                </React.Fragment>
            ))}
        </div>
    );
}

 export default Rating;