import { baseURL } from "../../Constants/Baseurl";
import axios from "axios";
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../../Constants/Endpoints";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ActionTypes } from "./Actiontypes";

export const RegisterUser = (request) => (dispatch) => {
  const response = axios
    .post(`${baseURL}${REGISTER_USER}`, { ...request })
    .then((data) => {
      console.log("userres", data.data);
      dispatch({
        type: ActionTypes.CUSTOMER_LIST_DETAILS,
        payload: data.data,
    })
      localStorage.setItem("Userid", data.data.id);
      if (data.status === 201) {
        toast.success("user created successfully");
      }
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const Loginuser = (request) => (dispatch) => {
  const response = axios
    .post(`${baseURL}${LOGIN_USER}`, { ...request })
    .then((data) => {
      console.log("login", data.data);

      if (data.status === 200) {
        toast.success("login successfully");
      }

      dispatch({
        type: ActionTypes.LOGIN_USER,
        payload: data.data.token,
      });
      return data;
    })
    .catch((err) => {
      toast.error(err.response.data.error);
    });

  return response;
};

export const Logout = (request) => (dispatch) => {
  const id = localStorage.getItem("Userid");
  const response = axios
    .post(`${baseURL}${LOGOUT_USER}/${id}`)
    .then((data) => {
      console.log("logout", data.data);
      toast.success("log out successfuly");

      dispatch({
        type: ActionTypes.LOGOUT_USER,
        payload: {},
      });
      return data;
    })
    .catch((err) => {
      toast.error(err.response.data.error);
    });

  return response;
};
