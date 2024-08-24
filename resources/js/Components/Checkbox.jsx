export default function Checkbox({
    name,
    className = "",
    handleChange,
    ...props
}) {
    return (
        <input
            {...props}
            name={name}
            type="checkbox"
            className={
                "rounded border-gray-300 text-[#FB6908] shadow-sm focus:ring-[#fb8739] " +
                className
            }
            onChange={(e) => handleChange(e)}
        />
    );
}
