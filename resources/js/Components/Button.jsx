import PropTypes from "prop-types";

const Button = (props) => {
    const {
        type = "submit",
        className,
        variant = "primary",
        processing,
        children,
    } = props;

    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
        >
            {children}
        </button>
    );
};

Button.propsTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default Button;
