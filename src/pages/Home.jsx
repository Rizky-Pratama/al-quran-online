import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import ListSurah from "../components/ListSurah";

function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-white">
        <ListSurah />
        <BackToTop />
      </div>
    </>
  );
}

export default Home;
