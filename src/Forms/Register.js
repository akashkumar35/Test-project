import React, { useState } from "react";

import { Button } from "antd";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/Actions/Formactions";
import { ColorRing } from "react-loader-spinner";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlesigninClick = () => {
    navigate("/login");
  };
  const [loading, setloading] = useState(false);

  const initialvalues = {
    name: "",
    job: "",
    email: "",
    password: "",
  };

  const [registervalues, setregistervalues] = useState(initialvalues);
  const handlechange = (e) => {
    setregistervalues({ ...registervalues, [e.target.name]: e.target.value });
  };

  const handleclick = () => {
    setloading(true);
    dispatch(RegisterUser(registervalues)).then((data) => {
      setloading(false);
      if (data) {
        navigate("/login");
      }
    });
    console.log(registervalues);
  };

  return (
    <div className="flex justify-center items-center bg-blue-500 min-h-[100vh]">
      <div className="lg:w-[30%] w-[80%] bg-white py-[3%] rounded-[5%] px-[2%]">
        <div>
          <h1 className="text-[30px] font-bold mt-3">Create your account</h1>
        </div>
        <div className="text-start p-4">
          <p className="text-[20px] font-medium">Name:</p>
          <input
            type="text"
            className="h-[30px] w-full rounded-md mt-2 border-2 border-black px-2"
            value={registervalues.name}
            name="name"
            onChange={handlechange}
          />
        </div>
        <div className="text-start p-4">
          <p className="text-[20px] font-medium">Jobrole:</p>
          <input
            type="text"
            className="h-[30px] w-full rounded-md mt-2 border-2 border-black px-2"
            value={registervalues.job}
            name="job"
            onChange={handlechange}
          />
        </div>
        <div className="text-start p-4">
          <p className="text-[20px] font-medium">Email:</p>
          <input
            type="text"
            className="h-[30px] w-full rounded-md mt-2 border-2 border-black px-2"
            value={registervalues.email}
            name="email"
            onChange={handlechange}
          />
        </div>
        <div className="text-start p-4">
          <p className="text-[20px] font-medium">Password:</p>
          <input
            type="text"
            className="h-[30px] w-full rounded-md mt-2 border-2 border-black px-2"
            value={registervalues.password}
            name="password"
            onChange={handlechange}
          />
        </div>

        <div className="p-4">
          <Button
            className="w-full"
            type="primary"
            onClick={() => handleclick()}
          >
            Sign up
          </Button>
        </div>

        <div className="flex justify-center">
          {loading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : null}
        </div>

        <span>
          Already have an account
          <span className="px-1 text-blue-700" onClick={handlesigninClick}>
            Log in
          </span>
        </span>
      </div>
    </div>
  );
};

export default Register;
