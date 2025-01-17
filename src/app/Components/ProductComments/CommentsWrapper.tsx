import CommentsBox from "./CommentsBox";

function CommentsWrapper() {

    return (
        <section className="w-full p-4 bg-bg-500 | md:p-6 | lg:p-6">
            <div className="flex gap-3 mb-8 | md:mb-6">
                <h1 className="font-semibold text-[20px] leading-7 tracking[-2%] text-second-500">Reviews</h1>
                <p className="bg-prm-500 px-3 content-center rounded font-bold text-sm leading-4 tracking-[-2%] text-bg-400">13</p>
            </div>
            <CommentsBox />
            <CommentsBox />
        </section>
    );
};

export default CommentsWrapper;