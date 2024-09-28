import Label from "@/Components/Label";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";

const Edit = ({ auth, movie }) => {
    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT", // For Laravel to recognize this as a PUT request
        name: movie.name,
        category: movie.category,
        video_url: movie.video_url,
        thumbnail: null, // Initialize as null
        rating: movie.rating,
        is_featured: movie.is_featured,
    });

    const onHandleChange = (event) => {
        const { name, type, value, files, checked } = event.target;
        setData(
            name,
            type === "file" ? files[0] : type === "checkbox" ? checked : value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();

        // Append all form fields to formData
        Object.keys(data).forEach((key) => {
            if (key === "thumbnail" && data[key] === null) {
                // Don't append thumbnail if it's null
            } else {
                formData.append(key, data[key]);
            }
        });

        post(route("admin.dashboard.movie.update", movie.id), formData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Edit Movie" />
            <h1 className="text-2xl font-medium mb-1">Edit movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit} encType="multipart/form-data">
                <Label htmlFor="name" value="Movie Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of the movie.."
                    autoComplete="name"
                    isFocused
                    handleChange={onHandleChange}
                    defaultValue={movie.name}
                />
                <InputError message={errors.name} className="mt-2" />

                <Label htmlFor="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the category of the movie.."
                    autoComplete="category"
                    handleChange={onHandleChange}
                    defaultValue={movie.category}
                />
                <InputError message={errors.category} className="mt-2" />

                <Label htmlFor="video_url" value="Video URL" className="mt-4" />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie.."
                    autoComplete="video_url"
                    handleChange={onHandleChange}
                    defaultValue={movie.video_url}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <Label htmlFor="thumbnail" value="Thumbnail" className="mt-4" />
                {movie.thumbnail && (
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        alt="movie"
                        className="w-40 rounded-md shadow mb-2"
                    />
                )}
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert thumbnail of the movie.."
                    autoComplete="thumbnail"
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
                    handleChange={onHandleChange}
                    defaultValue={movie.rating}
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
                        handleChange={onHandleChange}
                        checked={movie.is_featured}
                    />
                </div>

                <Button type="submit" className="mt-4" processing={processing}>
                    Edit
                </Button>
            </form>
        </Authenticated>
    );
};

export default Edit;
