import "./register.css"
import { useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {get, post} from "../../utils/axiosAPI";
import {loginSuccess} from "../../redux/authSlice";

export default function Register() {
  const [error, setError] = useState("")
    const [values, setValues] = useState({
        name: "",
        tel: "",
        email: "",
        username: "",
        password: "",
        
      });
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "Tên công ty",
          errorMessage: "Không để trống",
          label: "Tên công ty",
          required: true,
        },
        {
          id: 2,
          name: "tel",
          type: "tel",
          placeholder: "012345678",
          errorMessage: "Không để trống",
          label: "Số điện thoại",
          required: true,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "abc@gmail.com",
          errorMessage: "Không để trống",
          label: "Email",
          required: true,
        },
        
        {
          id: 4,
          name: "username",
          type: "text",
          placeholder: "",
          errorMessage:
            "Không để trống",
          label: "Tên đăng nhập",
          required: true,
        },
        {
          id: 5,
          name: "password",
          type: "password",
          placeholder: "Mật khẩu",
          errorMessage:
            "Mật khẩu từ 8 đến 20 kí tự và bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
      ];
    const navigate = useNavigate()
      
  const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await post("/auth/register", {
          name: values.name,
          avatar: null,
          phone: values.tel,
          email: values.email,
          password: values.password,
          role: "admin",
          username: values.username
        });
        console.log("in ", res.data._id)
        const res2 = await post ("http://localhost:8000/company/create", {
            "name":values.name,
            "totalEmployee":0,
            "type":"",
            "about":"",
            "phone":values.tel,
            "location": "",
            "isDelete": "false",
            "idUser": res.data._id
        }) 
        console.log("res ", res)
        alert("Đăng kí thành công")
        navigate("/recLogin")

      } catch (err) {
        console.log(err);
        setError(err.response.data.message);
        
        
      }
      
    };
    
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="loginContainer">
            <form  >
            <h1 className="register">Đăng ký tài khoản <br/> nhà tuyển dụng </h1>
            {inputs.map((input) => (
                <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
               
            />
            ))}
            {error && <p>{error}</p>}
            <button className="btnLogin" onClick={handleSubmit}>Đăng ký</button>
            <div className="forgetPassword">
            <Link to={"/recLogin"} style={{ textDecoration: 'none', color: 'darkblue' }} ><p className="">Bạn đã có tài khoản?</p>  </Link>
            
            </div>
            
            
      </form>
        </div>
    )
}