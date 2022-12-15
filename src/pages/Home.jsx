import Navbar from "../components/Navbar";
import Container from "../components/Container";
import BackToTop from "../components/BackToTop";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [surat, setSurat] = useState([]);

  const getSurat = async () => {
    axios
      .get("https://api.quran.gading.dev/surah")
      .then((ress) => setSurat(ress.data.data))
      .catch((error) => console.log("error :", error));
  };

  useEffect(() => {
    getSurat();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <Navbar />
      <Container>
        <div className="mt-6 flex flex-wrap gap-5 justify-center">
          {surat.map((ress) => (
            <div className="flex " key={ress.number}>
              <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{`Surah : ${ress.name.transliteration.id}(${ress.number}) `}</h2>
                  <p>{`Arti dari surat ini adalah ${ress.name.translation.id} dan Surah ini diturunkan di kota ${ress.revelation.id}. Memiliki ${ress.numberOfVerses} ayat`}</p>
                  <div className="card-actions justify-end items-center">
                    <Link className="text-neutral text-md font-semibold hover:text-black">
                      Lihat Tafsir
                    </Link>
                    <Link
                      to={`surah/${ress.number}`}
                      className="py-1 px-5 bg-neutral rounded text-white hover:bg-neutral-focus hover:ring hover:ring-gray-400"
                    >
                      Baca
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <BackToTop/>
    </div>
  );
}

export default Home;
