
import { useState } from "react";
import WheelComponent from "./components/react-wheel-of-prizes";
import { root } from ".";

export default function App() {

  const [cd, setcd] = useState("");
  const [segments, setSegments] = useState(["Ebrahim", "Jashim", "Rifat", "Jishan", "Nazim"]);
  const [segmentsXD, setSegmentsXD] = useState(<><li>Ebrahim</li> <li>Jashim</li> <li>Rifat</li> <li>Jishan</li> <li>Nazim</li></>);
  const [segColors, setSegColors] = useState(["#2d96ff", "#4bc421", "#ff9400", "#f22828", "#c12eee","#101e2c"]);
 
  const onFinished = (winner) => {
    console.log(winner);
  };


  function getRandomColorCode() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const colorCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return colorCode;
  }
  
const ppxx = () =>{

  
  segments.push(cd)

   segColors.push(getRandomColorCode())
  setSegments(segments)
  setSegmentsXD(<>
  {segmentsXD}
  <li>{cd}</li>
  </>
  )
  setSegColors(segColors)

}
  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center", alignItems: "start",}}>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={50}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      <div style={{padding:'5%', margin:"5%", border:"2px solid black", width:"30%"}}>
        <ul>

        {segmentsXD}

        </ul>
       
        <input placeholder="Name" onChange={(e)=>{
            setcd(e.target.value)
        }} />
        <br></br>

        <button onClick={()=>{
          ppxx()
        }}>Add</button>
      </div>
      </div>
    </div>
  );
}
