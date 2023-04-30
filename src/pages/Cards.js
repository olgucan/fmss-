import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ setFilter, filter, moreData, LoadData, filterData }) => {
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
          onClick={() => filterData(filter)}
          className="bg-[#007fff] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
        >
          Filter
        </button>
      </div>

      <div className="mx-auto grid sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-5 gap-4 mt-8 w-4/5">
        {console.log(moreData, "moredatafiltered2")}
        {console.log(filter, "filtered2")}
        {}
        {console.log(
          'dd'
        )}
        {moreData.reduce((accumulator, current) => {
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
