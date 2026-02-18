import React from 'react'

const Card = (props) => {
  return (
    <div className ='Card'>
      <div className='upper'><span>PRO</span></div>
      <div className ='top'>
        <img src ={props.img}></img>
         <h2>{props.name}</h2>
        <h3>{props.country}</h3> 
      </div>
      <div className ='mid'>
        <div className="para">{props.info}</div>
        <div className="button">
            <button>Message</button>
            <button>Following</button>
        </div>
      </div>
      <div className ='buttom'>
        <span>SKILLS</span>
        <div className="skill">
           {props.skills.map((skill,index) =>(
           <span key ={index} >{skill}</span>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Card
