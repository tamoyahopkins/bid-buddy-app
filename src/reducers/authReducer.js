import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../actions/auth";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null
};

const getInitState = () => {
  return initialState;
};

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, 
        login: action.payload, 
        loginLoading: false 
      };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

    case LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};
