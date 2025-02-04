import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function watchWindowWidth() {
      console.log("resized");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return function () {
      console.log("cleaning up...");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);
  return <h1>Window width: {windowWidth}</h1>;
}
