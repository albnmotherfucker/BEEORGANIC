import { loginStart } from "./userRedux"
import { loginSuccess, loginFailure } from "./userRedux"
import { publicRequest } from "../requestMethods"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())

    }
}