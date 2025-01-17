import { ButtonProps } from "./type";

function Button({ children, onClick, className, state }: ButtonProps) {

    return (
        <button onClick={onClick}
                style={{
                    background: state === 'primary' ? "var(--primary-500)" : "var(--information-500)"
                }}
                className={`${className} rounded text-bg-500 font-semibold leading-[15.12px] text-center tracking-[-2%] hover:opacity-80 | lg:leading-6`}>
            {children}
        </button>
    );
};

export default Button;