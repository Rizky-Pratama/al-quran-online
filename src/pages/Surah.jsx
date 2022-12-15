import axios from "axios";
import { useEffect, useRef, useState } from "react";
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
      <div className="min-h-screen w-full bg-slate-100">
        <Navbar />
        <Container className={"lg:w-8/12"}>
          {isLoading && (
            <div classNmae="p-5 mt-5 w-full bg-white rounded-lg">
              <div classNmae="animate-pulse flex space-x-4">
                <div classNmae="rounded bg-slate-300 h-10 w-10"></div>
                <div classNmae="flex-1 space-y-6 py-1">
                  <div classNmae="h-2 bg-slate-300 rounded"></div>
                  <div classNmae="space-y-3">
                    <div classNmae="grid grid-cols-3 gap-4">
                      <div classNmae="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div classNmae="h-2 bg-slate-300 rounded col-span-1"></div>
                    </div>
                    <div classNmae="h-2 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className=" mt-5 w-full  bg-white rounded-lg">
            {!isLoading && (
              <div className="h-24 flex justify-center ">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p>Surat</p>
                  <h2 className="text-xl text-neutral font-semibold tracking-tight">
                    {surah.revelation.id}
                  </h2>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <h2>{surah.name.short}</h2>
                  <h2 className="text-lg text-neutral font-medium">
                    {`${surah.name.transliteration.id}(${surah.name.translation.id})`}
                  </h2>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p>Ayat</p>
                  <h2 className="text-xl text-neutral font-semibold">
                    {surah.numberOfVerses}
                  </h2>
                </div>
              </div>
            )}
          </div>
          <div className=" mt-4 w-full  bg-white rounded-lg">
            {!isLoading && surah.preBismillah ? (
              <div className="h-24 flex justify-center ">
                <div className="w-1/2 flex flex-col justify-center items-center">
                  <h4 className="text-2xl font-bold">
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
          <div className=" mt-4 w-full  rounded-lg bg-white">
            {!isLoading &&
              surah.verses.map((ress) => (
                <section
                  key={ress.number.inSurah}
                  className="space-y-4 flex justify-between hover:bg-gray-50"
                >
                  <div className="w-16 mt-3">
                    <span className="sticky top-1 left-1/4 text-xl text-neutral font-bold">
                      {ress.number.inSurah}
                    </span>
                  </div>
                  <div className="w-full px-7 py-2 flex flex-col flex-wrap items-end">
                    <h4 className="text-2xl font-bold text-end">
                      {ress.text.arab}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {ress.text.transliteration.en}
                    </span>
                    <span className="mt-3 text-base self-start font-medium">
                      {`${ress.translation.id}[${ress.number.inSurah}]`}
                    </span>
                  </div>
                </section>
              ))}
          </div>
        </Container>
      </div>
      <BackToTop />
    </>
  );
}

export default Surah;
