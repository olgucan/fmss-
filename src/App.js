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
  // useEffect(() => {
  //   fetchData(url);
  // }, [url]);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // useEffect(()=> {
  //   setMoreData((a)=>[...a,data])
  // },[data])
  useEffect(() => {
    setMoreData((a) => [...a, data]);
    
    console.log(moreData, "moredata");
  }, [data]);
  // const fetchData = useCallback(
  //   async (csurl) => {
  //     try {
  //       const response = await fetch(csurl);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   [url]
  // );
  const fetchData =
    async (csurl) => {
      try {
        const response = await fetch(csurl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
   
  
  const LoadData = () => {
    setUrl(() => data.next != "null" && data.next);
   // fetchData(url);
  };
  const filterData = (str) => {
    setMoreData((a) =>
       a.map((k) =>
      k.results ? {...k,results:data?.results?.filter((t) =>
        str == ""
          ? true
          : (t.model.toLowerCase().includes(str.toLowerCase()) ||
            t.name.toLowerCase().includes(str.toLowerCase()))
      )}  : k
      )
    );
  
   // console.log(filter,'filtertype')
  };
 // console.log(url);
  console.log(moreData,'moredatafiltered')
  return (
    <div className="App ">
      
      <Routes>
  <Route  path="/"  element={ <Cards setFilter={setFilter} filterData={filterData} filter={filter} moreData={moreData} LoadData={LoadData}/>} />
  <Route path="/singlepage" element={<SinglePage />} />
  
</Routes>
    </div>
  );
}

export default App;
