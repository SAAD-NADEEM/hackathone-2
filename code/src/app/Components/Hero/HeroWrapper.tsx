import Card1 from "./Card1";
import Card2 from "./Card2";


function HeroWrapper() {       

    return (
        <section className="flex justify-between gap-8 w-full">
            <Card1 />
            <Card2 />
        </section>
    );
};

export default HeroWrapper;