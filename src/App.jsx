import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a minimum loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Routes />}
    </>
  );
}

export default App;
