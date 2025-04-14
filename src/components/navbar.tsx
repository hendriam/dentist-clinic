import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Navbar() {
    return (
        <nav className="px-5 xl:px-0 py-8 flex justify-between items-center">
            <div className="flex">
                <Image src={logo} alt="logo" />
                <span className="text-xl font-bold">Dentis</span>
            </div>
            <div className="hidden sm:flex gap-10">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <button className="flex sm:hidden">burger</button>
        </nav>
    );
}
