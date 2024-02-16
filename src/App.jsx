import { useState, useEffect } from "react"
import Axios from "axios"
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchDogs()
  }, []);
  const fetchDogs = () => {
      const urlDogs = 'https://dog.ceo/api/breeds/image/random/20'
      Axios.get(urlDogs)
      .then(function (response) {
        setData(response.data.message)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  
  return (
    <>
      {data.map((image) => {
        <img src = {image}/>
      })}
    </>
  )
}

export default App
