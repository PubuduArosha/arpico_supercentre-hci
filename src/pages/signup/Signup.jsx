import React, {useState} from 'react';
import './signup.css'
import { Line, Circle } from 'rc-progress';

export default function Signup() {
  let [showfnameval, setshowfnameval] = useState("none");
  let [showlnameval, setshowlnameval] = useState("none");
  let [showemailval, setshowemailval] = useState("none");
  let [showpasswordeval, setshowpasswordeval] = useState("none");
  let [showpasswordconfermval, setshowpasswordconfermval] = useState("none");

  let [percent, setpercent] = useState("none");
  let [strokeColor, setstrokeColor] = useState("none");

  let regArr = ["[A-Z]","[a-z]","[0-9]","[$@$!%*#?&]"]

  let [passwordtype, setpasswordtype] = useState("");

  function FNameValidater(event) {
    let val = event.target.value

    console.log(val);
    if (val === '' || val.length < 3) {
      setshowfnameval("")
    }
    else {
      setshowfnameval("none");
    }

}
 
function LNameValidater(event) {
  let val = event.target.value

  console.log(val);
  if (val === '' || val.length < 3) {
    setshowlnameval("")
  }
  else {
    setshowlnameval("none");
  }

} 
  

  function EmailValidater(event) {
    let val = event.target.value

    console.log(val);
    if (val === '' || val.length < 3) {
      setshowemailval("")
    }
    else {
      setshowemailval("none");
    }

}

function PasswordValidater(event) {
  let val = event.target.value
  setpasswordtype(val);

  console.log(val);
  if (val === '' || val.length < 3) {
    setshowpasswordeval("")
  }
  else {
    setshowpasswordeval("none");
  }

  var passed = 0;

  for (var i = 0; i < regArr.length; i++) {
    if (new RegExp(regArr[i]).test(val)) {
      passed++;
    }
  }

  switch (passed) {
    case 0:
      setpercent("0");
      setstrokeColor("#ff3333");
      break;
    case 1:
      setpercent("25");
      setstrokeColor("#ff3333");
      break;
    case 2:
      setpercent("50");
      setstrokeColor("#ff751a");
      break;
    case 3:
      setpercent("75");
      setstrokeColor("#ffd633");
      break;
    case 4:
      setpercent("100");
      setstrokeColor("#33ff33");
      break;

  }
}

  function ConfirmPasswordValidater(event) {
    let val = event.target.value

    if (val === passwordtype || val === '' ) {
      setshowpasswordconfermval("none")
    }
    else {
      setshowpasswordconfermval("");
    }
  }



    return (
        <>
           <div id="signup_container">  
           <div className="row">
            <div className="column"  >
            <img src="https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/NTB-Arpico.jpg?alt=media&token=b7a4bb8b-bb4f-4677-a5ce-00fc982a9355" alt="" id="signupImg" />
          </div>
            <div className="column" >
              <div id="signup_form">
               <div id="inputs">
             {/* Main Title Section */}
                   <span id="title">
                   <h2>CREATE NEW ACCOUNT</h2>
                   <p id="title_para">Creating an account is easy. Just fill in the form below.</p>
                   </span>
            {/*End  Main Title Section */}

                   <div id="card">
                    <div className="row">
                    <h3 id="personal_title">PERSONAL INFORMATION</h3>
                    </div>
                    <div className="row" id="input_one">
                    <input type="text"   name="fname" id="fname" placeholder="First Name" required  onChange={FNameValidater}/>
                    </div>
                    <div className="alert-danger" style={{ display: showfnameval }}>Cheack First Name</div>

                    <div className="row"  id="input_one">
                    <input type="text"   name="lname" id="lname" placeholder="Last Name" required onChange={LNameValidater}/>
                    </div>
                    <div className="alert-danger" style={{ display: showlnameval }}>Cheack Last Name</div>

                   <div className="row" id="input_one">
                        {/* <Mail id="icons" className="mail"/> */}
                    <input type="email"   name="email" id="email" placeholder="email" required onChange={EmailValidater}/>
                   </div>
                   <div className="alert-danger" style={{ display: showemailval }}>Cheack Email</div>

                <div className="row">
                <input type="checkbox" id="check_box" name="check_box" />
  <label for="Checkbox" id="checkbox_label"> Sign Up for Newsletter </label>
                </div>
    <div className="row">
    <select>
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
    
                    </select>
    </div>

    <div className="row">
         <h3 id="personal_title">SIGN-IN INFORMATION</h3>
         </div>
                   
                <div className="row" id="input_one">  {/* <Pass id="icons" className="pass"/> */}
                   <input type="password"   name="password" id="password" placeholder="Password" required onChange={PasswordValidater} style={{marginBottom:"1px"}}/></div>
                   <Line percent={percent} strokeWidth="3" strokeColor={strokeColor} />
                   <div className="alert-danger" style={{ display: showpasswordeval }}>Cheack password</div>
                   
                 <div className="row" id="input_one">
                 <input type="password"   name="cnf-password" id="cnf-password" placeholder="Confirm Password" required onChange={ConfirmPasswordValidater}/>
                 <div className="alert-danger" style={{ display: showpasswordconfermval }}>Wrong password</div>
                 </div>
        

                   </div>
                   <div className="row" id="input_one">
                   <button>CREATE AN ACCOUNT</button>
                   </div>
                   <div className="row" id="input_one">
                   <a  href="Login.jsx" target="_blank">Already Have an Account?</a> 
                   </div>
            
            </div>
            </div>
  </div>
</div>
            </div>
                
      
        </> 
    )
}
