import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Cards = ({ setFilter, filter, moreData, LoadData }) => {
  const [csfiltereddata2,setFilteredData2]=useState(moreData)
  useEffect(()=> {
 setFilteredData2(moreData)
  },[moreData])
  const myfilter = () => {
  setFilteredData2(moreData.map((k) =>
  k.results ? {...k,results:k?.results?.filter((t) =>
    filter == ""
      ? true
      : (t.model.toLowerCase().includes(filter.toLowerCase()) ||
        t.name.toLowerCase().includes(filter.toLowerCase()))
  )}  : k)  )
  }
  return (
    <div className="container mx-auto w-4/5 my-32">
      <h1 className="text-3xl font-bold text-center">STAR WARS</h1>
      <div className="mx-auto flex items-center justify-center gap-4 mt-4">
        <span>Name / Model</span>
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          className="bg-grey  rounded-xl	bg-[brown] text-white p-2"
          placeholder="Name / Value"
        />
        <button
          onClick={() => myfilter()}
          className="bg-[#007fff] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
        >
          Filter
        </button>
      </div>

      <div className="mx-auto grid sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-5 gap-4 mt-8 w-4/5">
        {/* {console.log(moreData, "moredatafiltered2")} */}
        {/* {console.log(filteredData, "filtereddata")} */}
        {csfiltereddata2.reduce((accumulator, current) => {
            if (!accumulator.find((item) => item.next === current.next)) {
              accumulator.push(current);
            }
            return accumulator;
          }, []).map((b) =>
          b?.results?.map((a, i) => (
            <div key={i} className="card bg-black rounded-xl">
              <Link to={`/singlepage`} state={{ from: a.url }}>
                <img
                  src="starwarsshipsnabooroyalcruiser.webp"
                  alt=""
                  className="rounded-xl"
                />
              </Link>
              <div className="px-3 py-4">
                <h5 className="text-center">{a.name}</h5>
                <div className="text-xs py-4 flex flex-col gap-y-3">
                  <p>Model : {a.model}</p>
                  <p>Rating : {a.hyperdrive_rating}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mx-auto w-4/5 text-center mt-16">
        <button
          onClick={() => LoadData()}
          className="bg-[#007fff] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cards;
