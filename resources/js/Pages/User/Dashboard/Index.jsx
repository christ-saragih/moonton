import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

const Dashboard = ({ auth, featuredMovies, movies }) => {
    // {{ Auth::user() }}

    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    options={flickityOptions}
                    className="gap-[30px] __scroll-selector"
                >
                    {featuredMovies.map((featuredMovie) => (
                        <FeaturedMovie
                            key={featuredMovie.id}
                            {...featuredMovie}
                        />
                    ))}
                </Flickity>

                {/* Browse */}
                <div className="mt-12">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>

                    <Flickity
                        options={flickityOptions}
                        className="gap-[30px] __scroll-selector"
                    >
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} {...movie} />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
