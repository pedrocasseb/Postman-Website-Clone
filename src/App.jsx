import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="w-full bg-[linear-gradient(9.34deg,#140B1E_0%,#140B1E_70%,#491591_85%,#822C66_92%,#E0531F_100%)]">
                <Hero />
            </div>
        </>
    );
}

export default App;
