import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Input = (props) => {
    const {
        type,
        name,
        value,
        defaultValue,
        className,
        variant = "primary",
        autoComplete,
        required,
        isFocused,
        handleChange,
        placeholder,
        isError,
    } = props;

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 placeholder:text-gray-400 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
};

// membuat validasi untuk props yang sudah dibuat
Input.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "number",
        "file",
        "url",
    ]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "primary-outline", "error"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default Input;
