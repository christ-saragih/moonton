import { Link } from "@inertiajs/react";

export const MenuItem = ({ link, icon, text, isActive, method = "get" }) => {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
};
