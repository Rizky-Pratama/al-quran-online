import { useState } from "react";

function BacToTop() {
  const [show, setShow] = useState(false);

  const toogleHidden = () => {
    const scrolled = window.scrollY;
    scrolled > 100 ? setShow(true) : setShow(false);
  };

  const handlerToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  document.addEventListener("scroll", toogleHidden);
  return (
    <button
      onClick={handlerToTop}
      className={`${
        show ? "" : "hidden"
      } fixed bottom-5 right-10 px-4 py-2 rounded-full bg-stone-900 text-white`}
    >
      Atas
    </button>
  );
}

export default BacToTop;
