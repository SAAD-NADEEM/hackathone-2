import Rating from "../../Utils/Rating";



function ProductTitle(props: {name: string}) {

    const name = props.name

    return (
        <div>
            <h1 className="font-bold text-xl leading-6 tracking-[-3%] text-second-500 | lg:text-[32px] lg:leading-10">{name}</h1>
            <div className="flex gap-2 mt-[6px] items-center ">
                <Rating initialRating={4} />
                <p className="font-medium text-xs leading-4 tracking-[-2%] text-second-300 | lg:text-sm lg:leading-5 lg:text-second-400">440+ Reviewer</p>
            </div>
        </div>
    );
};

export default ProductTitle;