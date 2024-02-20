import {PictureCard} from "./PictureCard"

export const Display = ({allDogs})=>{
  return<>
  <ul className="w-full grid gril-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 px-3 md:px-5">
    {allDogs?.map((img, index)=>{
      return <PictureCard key={index} img={img}/>
    })}
  </ul>
  
  </>
}