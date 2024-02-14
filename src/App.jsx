import { useState } from "react"
import axios from "axios";

function App() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogs = async () => {
    try {
      setUrls([]);
      setIsLoading(true);
      // const res = await axios.get("https://dog.ceo/api/breeds/image/random/a");
      throw new Error("do something");
      setIsLoading(false);
      setUrls(res.data.message);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }

  return (
    <>
      <div className="mx-auto container">
        <div className="w-full p-2 flex justify-center mb-[60px]">
          <div className="flex flex-col items-center">
            <button onClick={fetchDogs} className={`p-2 bg-gray-200 rounded ${isLoading ? "animate-pulse" : ""}`}>Fetch New Dogs</button>
            {error ? <span className="text-red-400">Error: {error}</span> : ''}
          </div>
        </div>
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          { urls.map((url, idx) => <img key={idx} src={url} className="object-fill w-full"/>) }
        </div>
      </div>
    </>
  )
}

export default App
