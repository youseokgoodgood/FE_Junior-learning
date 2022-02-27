import React,{useState} from 'react';
import './RegistrationFrom.css'



export default function RegistrationFrom(){
    const [ID,setID] = useState('');

    const userSetInfo = (e) =>{
        console.log(e.target.value)
        setID(e.target.value);
    };

    return(
        <div className='wap'>
            <div className="wrapper">
                <h2>Registration</h2>
                <form action="#">
                <div className="input-box">
                    <input type="text" value={ID} placeholder="Enter your ID" onChange={userSetInfo}/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Create password" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm password" />
                </div>
                <div className="policy">
                    <input type="checkbox"/>
                    <h3>I accept all terms & condition</h3>
                </div>
                <div className="input-box button">
                    <input type="Submit" value="Register Now" />
                </div>
                <div className="text">
                    <h3>Already have an account? <a href="#">Login now</a></h3>
                </div>
                </form>
            </div>  
          </div>  
    );
};