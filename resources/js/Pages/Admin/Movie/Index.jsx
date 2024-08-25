import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/react";

const Index = ({ auth, flashMessage }) => {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type={"button"} className={"w-40 mb-8"}>
                    Insert New Movie
                </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage
                    type={flashMessage.type}
                    message={flashMessage.message}
                />
            )}
        </Authenticated>
    );
};

export default Index;
