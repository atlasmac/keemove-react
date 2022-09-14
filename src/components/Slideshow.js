import React from "react";
const delay = 2500;

export default function Slideshow({ colors }) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const slideShow = colors.map(el => {

      return (
        <div
          className="slide"
          key={el.id}
          style={{ backgroundImage: `url(${el.thumbnail})` }}
        ></div>
      )
  })

  const dots = colors.map((el, i) => {
    return (
      <div
        key={el.id}
        className={`slideshowDot${index === i ? " active" : ""}`}
        onClick={() => {
          setIndex(i);
        }}
      ></div>
    )
  })

  return (
    <div className='slideshow-container'>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slideShow}
        </div>

        <div className="slideshowDots">
          {dots}

        </div>
      </div>
    </div>
  );
}