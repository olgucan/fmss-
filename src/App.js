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
 // const [filteredData, setFilteredData] = useState([]);
//  let csfiltereddata = moreData.map((k) =>
//  k.results ? {...k,results:k?.results?.filter((t) =>
//    filter == ""
//      ? true
//      : (t.model.toLowerCase().includes(filter.toLowerCase()) ||
//        t.name.toLowerCase().includes(filter.toLowerCase()))
//  )}  : k
//  )
 
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
   // setFilteredData((a)=>moreData)
    //console.log(moreData, "moredata");
  }, [url,data]);
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
   // fetchData(url);
  };
 // const filterData = (myarray) => {
    // myarray=myarray.map((k) =>
    // k.results ? {...k,results:k?.results?.filter((t) =>
    //   filter == ""
    //     ? true
    //     : (t.model.toLowerCase().includes(filter.toLowerCase()) ||
    //       t.name.toLowerCase().includes(filter.toLowerCase()))
    // )}  : k
    // )
    // console.log(myarray)
    // return myarray
    
    // setFilteredData((a) =>
    //    moreData.map((k) =>
    //   k.results ? {...k,results:k?.results?.filter((t) =>
    //     str == ""
    //       ? true
    //       : (t.model.toLowerCase().includes(str.toLowerCase()) ||
    //         t.name.toLowerCase().includes(str.toLowerCase()))
    //   )}  : k
    //   )
    // );

  
   // console.log(filter,'filtertype')
  //};
 // console.log(url);
  //console.log(moreData,'moredatafiltered')
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
