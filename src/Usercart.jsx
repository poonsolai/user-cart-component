import { Fragment } from "react/jsx-runtime"
import "./Usercart.css"

let skils = ["UI/UX"," HTML","CSS","JAVASCRIPT","REACT","NODE.js","bootstrap"]

const userdata = [
  {
  username : "karthick",
  city:"Selam",
  job:"Frontend developer",
  skils : ["UI/UX"," HTML","CSS","JAVASCRIPT","REACT","NODE.js","bootstrap"],
  status : false ,
  profile : "./public/images/e2887132-4832-4534-95c4-a522eaed8975.jpg"
  },
  {
  username : "poonsolai",
  city:"Dharmapuri",
  job:"Frontend developer",
  skils : ["UI/UX"," HTML","CSS","JAVASCRIPT","REACT","NODE.js","bootstrap"],
  status : true ,
  profile : "./public/images/f80a8d47-99ec-4725-8409-628117ce9a93.jpg"
  },
  {
  username : "stony stark",
  city:"Dharmapuri",
  job:"Frontend developer",
  skils : ["UI/UX"," HTML","CSS","JAVASCRIPT","REACT","NODE.js","bootstrap","angular"],
  status : false ,
  profile : "./public/images/f3711a11-0bb2-4b90-bfc4-e2c859784f36.jpg"
  },
   {
  username : "stark",
  city:"Dharmapuri",
  job:"Frontend developer",
  skils : ["UI/UX"," HTML","CSS","JAVASCRIPT","REACT","NODE.js","bootstrap","angular"],
  status : true ,
  profile : "./public/images/f80a8d47-99ec-4725-8409-628117ce9a93.jpg"
  }
]

function User(props){
  return (
    <Fragment>
    
        <div className=" col-sm-6 cart-container ">
          <span className={props.status ? "pro px-3 online" : "pro px-3 ofline"}>{props.status ? "online ": "ofline"}</span>
          <img src={props.profile} alt="" />
          <div className="user">
            <h2>{props.name}</h2>
            <h2>{props.city}</h2>
            <h2>{props.job}</h2>
          </div>
          <div className="button">
            <button className="btn btn-outline-info px-4">Message</button>
            <button className="btn btn-outline-info px-4">Following</button>
          </div>
          <div className="skils">
            <p className="head">Skills :</p>
            <ul className="ul">
              {props.skils.map((skil,index)=>(
                <li key={index}>{skil}</li>
              ))}
            </ul>
          </div>
        </div>
   
    </Fragment>
   
  )
}


function Usercart() {
  return (
    <Fragment>
      {userdata.map((user,index)=>(<User 
      key={index} 
      name = {user.username}
      city = {user.city}
      job = {user.job}
      status = {user.status}
      skils = {user.skils}
      profile = {user.profile}
      />))}
      <User name="pavithra" city="Chennai" job="Fullstack developer" status={true} skils={['html','css','javascript','bootstrap','react','nodejs','python','express','mangodb']} profile="./public/images/f80a8d47-99ec-4725-8409-628117ce9a93.jpg"/>
    </Fragment>
  )
}

export default Usercart