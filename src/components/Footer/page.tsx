import Image from "next/image";
import Logo from "@/assets/logo.png"

const FooterPage = () => {
    return (
        <footer className="border-t border-gray-700 bg-[#0C0D10] mt-20">

            <div className="flex container mx-auto justify-between py-8 items-center">
                <div className="flex gap-4 items-center">
                    <Image src={Logo} alt="Fitlog Logo" />
                    <span className="text-sm font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                <div>
                    <p className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;