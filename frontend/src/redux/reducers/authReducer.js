import { SET_USER } from "../../constants/constants";

const initialState={
    data:null,
    accesstoken:null,
    login:false,
    type:null
}

export default (state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type){
        case SET_USER: return {data:action.payload.data,
            accesstoken:action.payload.data.accesstoken,
            login:true,
            type:action.payload.data.type
        }
        default: return state;
    }
}