import React ,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Link ,  useNavigate, } from "react-router-dom";

function SinglePage() {
  const [data,setData]=useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetchData(from);
  }, []);
  console.log(data)
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
  const location = useLocation()
  const { from } = location.state
  console.log(from,'csurl')
  return (
    <div className='container mx-auto w-4/5'>
     
        <div className='w-2/5 mx-auto bg-white mt-16 px-16 py-8 text-black border-black border-2 rounded-md'>
        <h2 className='underline text-xl font-bold text-center p-8'>{data.name}</h2>
        <img
              src="starwarsshipsnabooroyalcruiser.webp"
              alt=""
              className="rounded-xl"
            />
          <p>Model : {data.name}</p>
          <p>Hyperdrive_rating : {data.hyperdrive_rating}</p>
          <p>Passengers : {data.passengers}</p>
          <p>Max_atmosphering_speed : {data.max_atmosphering_speed}</p>
          <p>Manufacturer : {data.manufacturer}</p>
          <p>Spaceworks : </p>
          <p>Crew : {data.crew}</p>
          <p>Cargo_capacity : {data.cargo_capacity}</p>
        </div>
        <button className='px-8 py-4 text-black bg-white rounded-lg absolute top-12 left-4' onClick={() => navigate(-1)}>Go back</button>
          
    </div>
  )
}

export default SinglePage
