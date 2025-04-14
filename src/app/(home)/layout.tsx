import Navbar from "@/components/navbar";

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="container max-w-6xl mx-auto">
            <Navbar />
            {children}
        </main>
    );
}
