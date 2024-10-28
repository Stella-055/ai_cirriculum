import {React,useState} from 'react'
import {  FaHome,FaLightbulb,FaLaptopCode,FaBars,FaComment} from 'react-icons/fa'
import {  NavLink } from 'react-router-dom'

 function Sidebar  () {
    const [ hamvalue ,setHamvalue]= useState(false);
    function hamclick(){
     setHamvalue(!hamvalue)
    }
    if (hamvalue){
        return (
            <div className='hamnav'>
                <div className='six'><FaBars onClick={hamclick} style={{fontSize: '30px', color: '#007bff',position:"fixed"}}/></div> 
                   <div> <NavLink to= "/home" className={({ isActive }) => isActive ? " sevens activated" : "sevens"}> <FaHome style={{fontSize: '20px', color: '#007bff'}}/>
                    <h3>Home</h3> </NavLink ></div>
                    <div> <NavLink to= "/suggestion" className={({ isActive }) => isActive ? " sevens activated" : "sevens"}> <FaLightbulb style={{fontSize: '20px', color: '#007bff'}}/>
                    <h3>Suggestion</h3> </NavLink ></div>
                    <div> <NavLink to= "/generate" className={({ isActive }) => isActive ? " sevens activated" : "sevens"}> <FaLaptopCode style={{fontSize: '20px', color: '#007bff'}}/>
                    <h3>Generate</h3> </NavLink > </div>
                    <div> <NavLink to= "/feedback" className={({ isActive }) => isActive ? " sevens activated" : "sevens"}> <FaComment style={{fontSize: '20px', color: '#007bff'}}/>
                    <h3>Feedback</h3> </NavLink > </div>
            </div>
        )
    }
  return (
    <>
    <div className='six'><FaBars onClick={hamclick} style={{fontSize: '30px', color: '#007bff',position:"fixed"}}/></div> 
    <div className='one' style={{position:"sticky"}}>
        
        <div className='two'> 
         <NavLink to= "/home" className={({ isActive }) => isActive ? " seven activated" : "seven"}> <FaHome style={{fontSize: '20px', color: '#007bff'}}/>
            <h1>Home</h1>  <div className="activatedcircle"></div> </NavLink>
        </div>
        <div className='three'> 
        <NavLink to ="/suggestion" className={({ isActive }) => isActive ? " seven activated" : "seven"}> <FaLightbulb style={{fontSize: '20px', color: '#007bff'}}/>
        <h1>Suggestions</h1>    <div className="activatedcircle"></div></NavLink>
        </div>
        <div className='four'>
        < NavLink  to ="/generate" className={({ isActive }) => isActive ? " seven activated" : "seven"}>   <FaLaptopCode style={{fontSize: '20px' , color: '#007bff'}}/>
            <h1>Generate</h1>    <div className="activatedcircle"></div>
            </NavLink>
        </div>
        <div className='five'>
        < NavLink className={({ isActive }) => isActive ? " seven activated" : "seven"} to ="/feedback">   <FaComment style={{fontSize: '20px' , color: '#007bff'}}/>
            <h1>Feedback</h1>
            <div className="activatedcircle"></div>
            </NavLink> 
        </div>
       
          
        </div>
    </>
   
  )
}
export default Sidebar;