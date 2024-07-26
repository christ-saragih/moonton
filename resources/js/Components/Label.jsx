const Label = (props) => {
    const { htmlFor, value, className } = props;

    return (
        <label
            htmlFor={htmlFor}
            className={`text-base block mb-2 ${className}`}
        >
            {value}
        </label>
    );
};

export default Label;