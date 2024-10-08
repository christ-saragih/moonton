import { Link } from "@inertiajs/react";
import ReactPlayer from "react-player";

const Show = () => {
    return (
        <section
            class="mx-auto w-screen h-screen relative watching-page font-quicksand bg-form-bg"
            id="stream"
        >
            <div className="pt-24">
                <ReactPlayer
                    url={"https://youtu.be/liKCeGDp0PE?si=3Wk9hBE3tlY4x2D7"}
                    controls
                    width={"100%"}
                    height={"800px"}
                />
            </div>

            {/* Button back to dashboard */}
            <div class="absolute top-5 left-5 z-20">
                <Link href={route("prototype.dashboard")}>
                    <img
                        src="/assets/icons/ic_arrow-left.svg"
                        class="transition-all btn-back w-[46px]"
                        alt="stream"
                    />
                </Link>
            </div>

            {/* Video Title */}
            <div class="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span class="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
};

export default Show;
