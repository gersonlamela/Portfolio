import { CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";

export function ButtonTop() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <div className="fixed bottom-7 right-7 z-10">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 PurpleToBlue text-black flex items-center justify-center btn "
          >
            <CaretUp size={32} />
          </button>
        </div>
      )}
    </>
  );
}
