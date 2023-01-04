import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function ListSurah() {
  const [dataSurah, setDataSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSurah = async () => {
    setIsLoading(true);
    axios
      .get("https://api.quran.gading.dev/surah")
      .then((ress) => {
        setDataSurah(ress.data.data);
        setIsLoading(false);
      })
      .catch((error) => console.log("error :", error));
    // .finally(isLoading(false));
  };

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen grid place-items-center">
          <h1 className="text-8xl font-black text-stone-900">Loading...</h1>
        </div>
      ) : (
        <Container>
          <div className="mt-1 grid grid-cols-3 gap-1 justify-around">
            {dataSurah.map((data) => (
              <div key={data.number} className="h-20 flex rounded bg-stone-100">
                <div className="px-4 flex items-center">
                  <span className="text-base font-medium">{data.number}</span>
                </div>
                <div className="flex-auto flex flex-col justify-center">
                  <Link to={`/surah/${data.number}`} className="font-semibold">
                    <span className="underline underline-offset-2">
                      {data.name.transliteration.id}
                    </span>
                    <span className="ml-1 text-sm font-normal">{`(${data.name.translation.id})`}</span>
                  </Link>
                  <span>{data.numberOfVerses} Ayat</span>
                </div>
                <div className="px-2 flex items-center">
                  <span className="font-arabic text-xl ">
                    {data.name.short}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
}

export default ListSurah;
