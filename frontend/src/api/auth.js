import api from './index';

export const signUp = async(data)=>api.post('register',data)

export const signIn= async(data)=>api.post('login',data)