import { signIn, signUp } from "../../api/auth"
import { SET_USER } from "../../constants/constants";

export const login = (payload)=>async(dispatch) =>{
    let res = await signIn(payload);
    dispatch({type:SET_USER,payload:res.data});
    return res;
} 