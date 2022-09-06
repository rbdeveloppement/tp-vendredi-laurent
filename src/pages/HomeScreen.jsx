import React from "react"
import SwitchColor from "../Components/switchColor/SwitchColor"


const Home = ({ isDark, setIsDark}) => {
    return (
        <>
        <div>
           <h1>La boutique de Rémi Bernier</h1> 
        </div>
      <div>
        <SwitchColor isDark={isDark} setIsDark={setIsDark} />
      </div>
       
</>
    )
}
export default Home