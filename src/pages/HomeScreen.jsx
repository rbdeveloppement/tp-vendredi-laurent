import React from "react"
import SwitchColor from "../Components/switchColor/SwitchColor"


const Home = ({setDark , isDark}) => {
    return (
        <>
        <div className={`${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
           <h1>La boutique de Rémi Bernier</h1> 
        </div>
      <div>
        <SwitchColor setDark={setDark} isDark={isDark} />
      </div>
       
</>
    )
}
export default Home