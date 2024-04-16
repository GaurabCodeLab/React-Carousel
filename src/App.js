import "./app.css";
import { useState, useEffect} from "react";
import photos from "./utils/constants";

const App = ()=>{
const [index, setIndex] = useState(0);
useEffect(()=>{
const timer = setTimeout(()=>{
  handleNext();
  console.log("settimeout called");
}, 2000);
return ()=>clearTimeout(timer);
}, [index]);

const handleNext = ()=>setIndex((index - 1 + photos.length) % photos.length);

  return (
    <>
    <h1 className="heading">Carousel In React Js</h1>
    <div className="container">
    <button onClick={handleNext}>Previous</button>
   {
    photos.map((photo, i)=>(
      <img src={photo} alt="crousel" key={photo} className={(index === i) ? "active" : "hidden"}/>
    ))
   }
    <button onClick={()=>setIndex((index + 1) % photos.length)}>Next</button>
    </div>
    </>
  )
};

export default App;