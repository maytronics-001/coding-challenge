import { useState } from "react"
import axios from 'axios'

function App() {

	const [dogs, setDogs] = useState([])
	const [loadState, setLoadState] = useState("")

	const handleFetchDogs=async ()=>{
		setLoadState("load")
		try {
			const ret = await axios.get('https://dog.ceo/api/breeds/image/random/20')
			setDogs(ret.data.message);
			setLoadState("load success")
		} catch (error) {
			setLoadState("load failed")
			console.log(error)
		}
	}

	console.log(dogs)
	
	return (
		<div className="app">
			<button disabled={loadState === "load"} onClick={handleFetchDogs} className="btn">Get Dogs</button>
			<div className="dogs-ctr">
				{
					dogs.map((item,index)=>{
						return(
							<div className="dog-item" key={index}>
								<img src={item} width="100%"/>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default App
