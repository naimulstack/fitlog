import Link from "next/link";
import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const BannerPage = () => {
    return (
        <section className="mx-auto mt-8 container">
            <div className="grid grid-cols-1 items-center overflow-hidden rounded-xl border border-white/10 bg-[#222630] p-8 md:grid-cols-2 md:px-10 md:py-7">

                {/* Left Content */}
                <div className="max-w-[580px] my-10">

                    <p className="mb-4 text-[10px] font-bold tracking-wide text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="font-oswald text-4xl font-black text-white sm:text-5xl md:text-[42px] lg:text-[55px]">
                        TRAIN WITH INTENT. LOG <br />EVERY SET.
                    </h1>

                    <p className="mt-4 max-w-[500px] leading-6 text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <Link href=""
                        className="mt-5 inline-flex items-center rounded-md bg-[#C2F800] px-6 py-2.5 text-[11px] font-bold text-black transition hover:bg-[#1A2312] hover:text-[#C2F800]"
                    >
                        BROWSE WORKOUTS
                    </Link>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center md:justify-end">
                    <Image src={BannerImage} alt="FitLog banner" priority className="h-[300px] w-[350px] object-contain sm:h-[320px] sm:w-[370px] md:h-[350px] md:w-[410px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default BannerPage;