import Link from "next/link";
import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const BannerPage = () => {
    return (

        <section className="mx-auto mt-8 container p-4">

            <div className="grid grid-cols-1 items-center overflow-hidden rounded-xl border border-white/10 bg-[#222630] p-8 md:grid-cols-2 md:px-10 md:py-7">

                {/* Left Content */}
                <div className="max-w-[580px] my-10">

                    {/* Eyebrow */}
                    <p className="mb-4 text-[10px] font-bold tracking-wide text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    {/* Heading */}
                    <h1 className="max-w-[570px] text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-[42px] lg:text-[44px]">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    {/* Description */}
                    <p className="mt-4 max-w-[500px] text-sm leading-6 text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* CTA */}
                    <Link
                        href="#library"
                        className="mt-5 inline-flex items-center rounded-md bg-[#C2F800] px-5 py-2.5 text-[10px] font-bold text-black transition hover:bg-[#d4ff3d]"
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