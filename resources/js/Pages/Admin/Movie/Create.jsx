import Label from "@/Components/Label";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    const { setData, post, processing, errors } = useForm({
        // value yang akan dikirim ke backend
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Create Movie" />
            <h1 className="text-2xl font-medium mb-1">Insert a new movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <Label htmlFor="name" value="Movie Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of the movie.."
                    autoComplete="name"
                    isFocused
                    handleChange={onHandleChange}
                />
                <InputError message={errors.name} className="mt-2" />

                <Label htmlFor="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the category of the movie.."
                    autoComplete="category"
                    isFocused
                    handleChange={onHandleChange}
                />
                <InputError message={errors.category} className="mt-2" />

                <Label htmlFor="video_url" value="Video URL" className="mt-4" />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie.."
                    autoComplete="video_url"
                    isFocused
                    handleChange={onHandleChange}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <Label htmlFor="thumbnail" value="Thumbnail" className="mt-4" />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert thumbnail of the movie.."
                    autoComplete="thumbnail"
                    isFocused
                    handleChange={onHandleChange}
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <Label htmlFor="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    placeholder="Enter the rating of the movie.."
                    autoComplete="rating"
                    isFocused
                    handleChange={onHandleChange}
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <Label
                        htmlFor="is_featured"
                        value="Is Featured"
                        className="mt-[6px] mr-2"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>

                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
};

export default Create;
