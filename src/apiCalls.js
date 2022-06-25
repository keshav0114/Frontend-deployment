import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "https://arcane-brushlands-68997.herokuapp.com/api/auth/login",
      userCredential
    );
    console.log(res);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
