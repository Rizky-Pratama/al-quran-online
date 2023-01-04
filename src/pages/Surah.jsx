import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";

function Surah() {
  const [surah, setSurah] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { surahId } = useParams();

  async function getSurahById(surahId) {
    setIsLoading(true);
    axios
      .get(`https://api.quran.gading.dev/surah/${surahId}`)
      .then((ress) => {
        setSurah(ress.data.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getSurahById(surahId);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {isLoading && (
          <div className="mt-5 h-24 flex justify-center items-center rounded bg-gray-50">
            <div className="flex items-center animate-pulse gap-20 space-x-4">
              <div className="w-28 h-10 flex flex-col justify-center items-center gap-2">
                <div className="h-5 w-28 rounded bg-slate-300"></div>
                <div className="h-5 w-20 rounded bg-slate-300"></div>
              </div>
              <div className="w-28 h-10 flex flex-col justify-center items-center gap-2">
                <div className="h-5 w-20 rounded bg-slate-300"></div>
                <div className="h-5 w-28 rounded bg-slate-300"></div>
              </div>
              <div className="w-28 h-10 flex flex-col justify-center items-center gap-2">
                <div className="h-5 w-28 rounded bg-slate-300"></div>
                <div className="h-5 w-20 rounded bg-slate-300"></div>
              </div>
            </div>
          </div>
        )}
        <div className=" mt-5 w-full  bg-gray-50 rounded-lg">
          {!isLoading && (
            <div className="h-24 flex justify-center ">
              <div className="w-1/4 flex flex-col justify-center items-center">
                <span>Surah</span>
                <span className="text-lg text-neutral font-medium tracking-tight">
                  {surah.revelation.id}
                </span>
              </div>
              <div className="w-1/4 flex flex-col justify-center items-center">
                <span className="font-arabic text-2xl">{surah.name.short}</span>
                <p className="text-lg text-neutral font-medium">
                  {`${surah.name.transliteration.id} (${surah.name.translation.id})`}
                </p>
              </div>
              <div className="w-1/4 flex flex-col justify-center items-center">
                <span>Ayat</span>
                <span className="text-xl text-neutral font-semibold">
                  {surah.numberOfVerses}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className=" mt-4 w-full  bg-gray-50 rounded-lg">
          {!isLoading && surah.preBismillah ? (
            <div className="h-24 flex justify-center ">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <h4 className="font-arabic text-2xl font-bold">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
                </h4>
                <span className="text-sm text-gray-500">
                  Bismillaahir Rahmaanir Raheem
                </span>
                <span className="text-base font-medium">
                  Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                </span>
              </div>
            </div>
          ) : null}
        </div>
        <div className=" mt-4 w-full  rounded-lg bg-gray-50">
          {!isLoading &&
            surah.verses.map((ress) => (
              <section
                key={ress.number.inSurah}
                className="space-y-4 flex justify-between hover:bg-gray-100"
              >
                <div className="w-16 mt-3">
                  <span className="sticky top-1 left-1/4 text-xl text-neutral font-bold">
                    {ress.number.inSurah}
                  </span>
                </div>
                <div className="w-full px-7 py-2 flex flex-col flex-wrap items-end">
                  <p className="mb-2 font-arabic text-2xl font-bold text-end">
                    {ress.text.arab}
                  </p>
                  <span className="text-sm text-gray-500">
                    {ress.text.transliteration.en}
                  </span>
                  <span className="mt-3 text-base self-start font-medium">
                    {`${ress.translation.id}`}
                  </span>
                </div>
              </section>
            ))}
        </div>
      </Container>
      <BackToTop />
    </>
  );
}

export default Surah;
