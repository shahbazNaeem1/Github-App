import * as authActions from '../constants/actions/auth';

export const logIn = accessToken => async dispatch =>
  dispatch({type: authActions.LOG_IN, payload: accessToken});

export const logOut = () => async dispatch =>
  dispatch({type: authActions.LOG_OUT});
