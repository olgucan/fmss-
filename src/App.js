import "./App.css";
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import Cards from "./pages/Cards";
function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/starships");
  const [moreData, setMoreData] = useState([]);
  const [filter, setFilter] = useState("");
 
  useEffect(() => {
    fetchData(url);
  }, [url]);

 
  useEffect(() => {
   
    setMoreData((a) => [...a, data]);
   
  }, [url,data]);
  
  const fetchData =
    async (csurl) => {
      const controller = new AbortController()
      try {
        
        const response = await fetch(csurl,{signal:controller.signal});
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
      return () => {
        controller.abort()
      }
    }
   
  
  const LoadData = () => {
    setUrl(() => data.next != "null" && data.next);
   
  };
 
  return (
    <div className="App ">
      
    <Routes>
  <Route  path="/"  element={ <Cards  setFilter={setFilter}  filter={filter} moreData={moreData} LoadData={LoadData}/>} />
  <Route path="/singlepage" element={<SinglePage />} />
</Routes>
    </div>
  );
}

export default App;
