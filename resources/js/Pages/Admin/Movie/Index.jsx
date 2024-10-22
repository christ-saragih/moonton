import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import { Head, Link, useForm } from "@inertiajs/react";

const Index = ({ auth, flashMessage, movies }) => {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="List of Movie" />

            <Link href={route("admin.dashboard.movie.create")} className="w-full flex justify-end">
                <Button type={"button"} className={"max-w-52 mb-8"}>
                    Insert New Movie
                </Button>
            </Link>

            {flashMessage?.message && (
                <FlashMessage
                    type={flashMessage.type}
                    message={flashMessage.message}
                />
            )}

            <div class="relative overflow-x-auto">
                <table class="w-full text-base text-left text-gray-500 ">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr
                                key={movie.id}
                                class="bg-white border-b font-medium text-gray-800 whitespace-nowrap"
                            >
                                <td scope="row" class="px-6 py-4">
                                    <img
                                        src={`/storage/${movie.thumbnail}`}
                                        alt="movie"
                                        className="w-32 h-44 object-cover rounded-md"
                                    />
                                </td>
                                <td class="px-6 py-4">{movie.name}</td>
                                <td class="px-6 py-4">{movie.category}</td>
                                <td class="px-6 py-4">
                                    {movie.rating.toFixed(1)}
                                </td>
                                <td class="px-6 py-4">
                                    <Link
                                        href={route(
                                            "admin.dashboard.movie.edit",
                                            movie.id
                                        )}
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <div
                                        onClick={() => {
                                            movie.deleted_at
                                                ? put(
                                                      route(
                                                          "admin.dashboard.movie.restore",
                                                          movie.id
                                                      )
                                                  )
                                                : destroy(
                                                      route(
                                                          "admin.dashboard.movie.destroy",
                                                          movie.id
                                                      )
                                                  );
                                        }}
                                        class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 inline cursor-pointer"
                                    >
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
};

export default Index;
