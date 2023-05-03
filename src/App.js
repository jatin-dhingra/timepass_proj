import React,{useState} from 'react'
import './App.css'
export const App = () => {
  const images=[
    "https://images.unsplash.com/photo-1682961941145-e73336a53bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1682547092015-59ca729904c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  ]
  const [currentimage,setimage]=useState(0);
  const goleft=()=>{
    setimage(currentimage===0?images.length-1:currentimage-1);
  }
  
  const goright=()=>{
    setimage(currentimage===images.length-1?0:currentimage+1);
  }
  return (
    <React.Fragment>
      <h1 className='h1'>Image Slider</h1>
      <div className='content'>
        <button onClick={goleft}>Left</button>
        <div>
          {images.map((image,ind)=>currentimage===ind && (
            <div key={image} className="slide">
              <img src={image} alt="images" />
            </div>
          ))}
        </div>
        <button onClick={goright}>Right</button>
      </div>
    </React.Fragment>
  )
}

export default App;