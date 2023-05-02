import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchImages } from "./helpers";
import { Layout } from "./components";
import { Error, Gallery } from "./pages";
import Upload from "./pages/upload/Upload";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await fetchImages(dispatch);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
