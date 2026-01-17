import FabricGraphic from "@/components/FabricGraphic";

export default function Page() {
    return (
        <main>
            <div className="fixed top-0 left-0 w-full h-full z-0 p-4 font-sans pointer-events-none flex justify-between">
                <h1 className="text-2xl font-bold tracking-tighter text-black">FABRIC REPRODUCTION</h1>
            </div>
            <FabricGraphic />
        </main>
    );
}
