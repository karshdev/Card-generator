import React,{useState} from "react"
import ReactDOM  from "react-dom"
function Page(){
    const [file, setFile] = useState();
    const[input,setinput]=React.useState(
        {naam:"" ,img:"",role:"",twitter:"",facebook:"",linkedin:"",about:"",interests:""}
    )
    function handlechange(event){
        setinput(prevdata =>{
            return{
                ...prevdata,
                [event.target.name] : event.target.value
            }
        })
    }

    const loadFile = function(event) {
        setinput(prevdata =>{
            return{
                ...prevdata,
                img : URL.createObjectURL(event.target.files[0])
            }
        })
      };

    return (
    <div className="main">
        <div className="container">
        <h1 className="heading">FILL YOUR DETAILS</h1>
        <div className="name">
            <input className="inputname" type="text" placeholder="Full Name" onChange={handlechange} name="naam"/>
            <input className="inputname" type="file" placeholder="Upload Image" onChange={loadFile} name="img"/>
        </div>
        <div className="role">
            <input className="inputrole" type="text" placeholder="Role" onChange={handlechange}  name="role" />
            <input className="inputrole" type="text" placeholder="https://twitter.com/aakarshtwt"onChange={handlechange}  name="twitter" />
        </div>
        <div className="links">
            <input className="inputfacebook" type="text" placeholder="123@gmail.com" onChange={handlechange}  name="facebook"/>
            <input className="inputfacebook" type="text" placeholder="https://www.linkedin.com/in/" onChange={handlechange}  name="linkedin"/>
        </div>
        <div className="information">
            <input className="inputabout" type="text" placeholder="about" onChange={handlechange}  name="about"/>
        </div>
        <div className="information2">
        <input className="inputinterests" type="text" placeholder="interests" onChange={handlechange}  name="interests"/>
        </div>
    </div>
    <div className="header">
        <img src={input.img} className="img" />
        <div className="info">
            <h2>{input.naam}</h2>
            <h4>{input.role}</h4>
           <span><img src="twitter-16.ico"/><a  href={input.twitter}>{"@" + input.twitter.substring(20)}</a></span>
        </div>
    <div className="buttons">
        <button className="mail"><img src="mail-16.ico"/><a href={input.facebook} >Email</a></button>
        <button className="linkedin"><img src="linkedin.ico"/><a href={input.linkedin} >Linkedin</a></button>
    </div>
   
       
        <div className="about">
            <h2>About</h2>
            <p id="para1">{input.about}</p>

        </div>
        <div className="hobby">
            <h2>Interests</h2>
            <p id="para">{input.interests}</p>
        </div>
        </div>
        </div>
    )
}
ReactDOM.render(
    <Page />,document.getElementById("root")
)