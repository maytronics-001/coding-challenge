import axios from "axios"
import { useState} from "react"
function Home() {
  const [data, setData] = useState({})
  const [loading, isLoading] = useState(true)
  const [error, isError] = useState({error: false, message: ""})

  const fetchDogsData = async () => {
    isLoading(true)
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random/20')
      setData(response.data)
      isError(false)
    } catch (error) {
      console.error(error)
      isError({error: true, message: error.message})
    }
    isLoading(false)
  }

  return (
    <div>
      <div className="items-center text-center flex m-auto w-full justify-center">
        <button className="text-2xl bg-slate-800 text-white p-4 m-2" onClick={() => {
          fetchDogsData()
          console.log('I have received something')
        }}>
          Fetch Dogs Images
        </button>
      </div>
      
      <div className="flex justify-center content-center">
          {loading 
          ? 
          <div> 
            Loading... 
          </div> 
          : 
          <div className="grid grid-cols-1 gap-4 container md:grid-cols-3">
            {!error.error ? data.message.map((dogImg) => (
              <div key={dogImg} className="w-full"> 
                <img src={dogImg} alt="Random Dogs" className="aspect=[1/1] w-full" />
              </div>
            )) : <div className="justify-center">{error.message}</div>}
          </div>
          }
      </div>
    </div>

  )
}



export default Home