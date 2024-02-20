import { useState } from "react"
import { Display } from "./components/Display"
import axios from "axios"

function App() {
  const apiUrl = "https://dog.ceo/api/breeds/image/random/20";
  const [allDogs,setAllDogs]= useState([])
const [loading, setLoading] = useState(false)
const [loadingError, setLoadingError] = useState("")
  const fetchDogs = async () =>{
    setLoading(true)
    try {
      axios.get(apiUrl).then((data)=>{setAllDogs(data.data.message); setLoading(false)})
    } catch (error) {
    setLoadingError(error)
      console.log(error)
    }

  }

  return (
    <>
    <main className="w-[100vw] h-[100vh]">
      {/* BUTTON FOR FETCHING */}
      <div className="w-full flex justify-center items-end py-10">
      <button className="px-5 py-3 bg-gray-400" onClick={fetchDogs}>
      Fetch New Dogs
      </button>
      </div>
      {/* DISPLAY OF IMAGES */}
      {loading ? <div className="inset-0 fixed bg-slate-300 flex justify-center items-center text-3xl">Loading... Please wait</div> :
      <section>
      {allDogs.length ? 
        <Display allDogs={allDogs}/>
        : <div className="w-full flex justify-center items-center">Please Click the button to fetch dog images.</div>}
        </section>}
    </main>
    </>
  )
}

export default App
