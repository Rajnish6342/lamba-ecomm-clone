import { loginSuccess, loginStart, loginFailure } from './userRedux'
import { axiosInstance } from './../http/axios'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await axiosInstance.post('/auth/login', user)
    if(!res.data.accessToken) throw Error()
    dispatch(loginSuccess(res.data))
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
}