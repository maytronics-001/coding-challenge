import axios from "axios";
import { useState} from "react";

function App() {

  const [data, setData] = useState(null);

  const fetchData = async ()=>{
    const response = await axios.get("https://dog.ceo/api/breeds/image/random/20")
      setData(response.data.message)
      console.log(response.data.message)
  }

  return (
    <div className="text-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchData}>Fetch</button>
    <div>
    <ul className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
      {data && data.map((item, id)=>{
        return(
        <li key={id}>
          <img src={item}></img>
        </li>
        )
      })}
    </ul>
    </div>

    </div>
  )
}

export default App
