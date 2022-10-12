import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


type inputData = {
  datas: {
    email: String,
    passwrd: String | number
  }
}

const Login = (props: inputData) => {
  const navigate = useNavigate();

  const InputMail = useRef<HTMLInputElement | null>(null);
  const InputPass = useRef<HTMLInputElement | null>(null);
  const SubmitBtn = () => {
    var mail = InputMail.current?.value;
    var pass = InputPass.current?.value;



    // console.log(`Get the value for localstorage ${getmail} ${getpass}`);

    if ((mail === props.datas.email) && (pass === props.datas.passwrd)) {
      localStorage.setItem("EmailId", mail);
      localStorage.setItem("Password", pass)
      alert("successfully Run")
    }
    const getmail:string|any|number = localStorage.getItem("EmailId")
    const getpass:string|any|number = localStorage.getItem("Password")
     
    getmail&&getpass 
      ? navigate("/dash")
      :alert("Invalid mail and password ")  
  }

  return (
    <div>
      <h1>Login</h1>
      {/* { getmail&&getpass ? <DashPage/> : */}
      <form>
        <div>
          <input
            type="text"
            placeholder="Email"
            id="input-mail"
            ref={InputMail}
          />
        </div>

        <div>
          <input
            type="password"
            name="pass"
            id="input-pass"
            placeholder="Password"
            ref={InputPass}
          />
        </div>

        <div>
          <button onClick={SubmitBtn}>Submit</button>
        </div>

      </form>
      {/* } */}
    </div>
  );
};

export default Login;
