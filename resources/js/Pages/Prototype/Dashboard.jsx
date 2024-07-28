import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

const Dashboard = () => {
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
        <Authenticated>
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
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug={"the-batman-in-love"}
                            name={`The Batman in Love ${i}`}
                            category={"Comedy"}
                            thumbnail={"/assets/images/featured-1.png"}
                            rating={i + 1}
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
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                slug={"the-batman-in-love"}
                                name={`The Batman in Love ${i}`}
                                category={"Comedy"}
                                thumbnail={"/assets/images/browse-1.png"}
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
