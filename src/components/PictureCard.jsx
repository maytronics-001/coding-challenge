
export const PictureCard = ({img})=>{

  return <>
  {/* PICTURE CARD */}
  <li className="col-span-4 flex justify-center items-center">
 <img src={img} alt={img} className="object-contain w-full"/>
  </li>
  
  </>
}