import "./login.css"
import {useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


import {get, post} from "../../utils/axiosAPI";
import {loginSuccess} from "../../redux/authSlice";

export default function Login() {
    const [values, setValues] = useState({
        username: "",
        password: "",
      });
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Tên đăng nhập",
          errorMessage: "Không để trống",
          label: "Tên đăng nhập",
         
          required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Mật khẩu",
          errorMessage:
            "Mật khẩu từ 8 đến 20 kí tự và bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt!",
          label: "Mật khẩu",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        
      ];
    const [error, setError] = useState("")
      
    const navigate = useNavigate()
      

  const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const res = await post("auth/login", { username: values.username, password: values.password})
        console.log(res.data);
        dispatch(loginSuccess(res.data))
        navigate("/reCompany")
      } catch (error) {
        console.log(error.response.data)
        setError(error.response.data.message)
      
    };
  }
    
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="loginContainer">
            <form  >
            <h1 className="register">Đăng nhập tài khoản <br/> nhà tuyển dụng</h1>
            {inputs.map((input) => (
                <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
            />
            ))}
            {error && <p>{error}</p>}
            <button className="btnLogin" onClick={handleSubmit}>Đăng nhập</button>
            <div className="forgetPassword">
            <Link to={"/resetPassword"} style={{ textDecoration: 'none', color: 'darkblue' }} ><p className="">Quên mật khẩu?  </p> </Link>
            <Link to={"/recRegister"} style={{ textDecoration: 'none', color: 'darkblue' }} ><p className="">Bạn chưa có tài khoản?</p>  </Link>
            
            </div>
            
            
      </form>
        </div>
    )

}