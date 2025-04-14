import Image from "next/image";
import doctor from "../../public/doctor.png";

export default function Hero() {
    return (
        <section className="flex flex-col sm:flex-row bg-gradient-to-b gap-8 from-[#001A78] to-[#001359] rounded-4xl text-white px-5 xl:px-20">
            <div className="sm:text-start text-center mt-10 sm:mt-0">
                <h1 className="text-4xl font-bold font-sans mb-4 leading-tight">
                    Enhance Your Quality of Life Through a Healthy Smile With Us.
                </h1>
                <p className="text-base font-light mt-8">
                    We are committed to providing the best dental care that prioritizes your oral
                    health. With our experience and dedication, we are always ready to assist you in
                    achieving a healthy smile and improving your quality of life.
                </p>
                <button className="bg-[#00CE9C] text-white px-6 py-3 rounded-lg mt-8">
                    Book an appointment now
                </button>
            </div>

            <div className="relative">
                <div className="w-40 h-40 bg-[#00CE9C] blur-2xl absolute rounded-full bottom-0 left-12"></div>
                <div className="w-60 h-60 bg-[#F4FFFB] opacity-15 rounded-full absolute -bottom-10 flex justify-center items-center"></div>
                <Image src={doctor} alt="doctor" width={600} className="relative" />
            </div>
        </section>
    );
}
