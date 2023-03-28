import * as actions from '../constants/actions/auth';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
};

export default auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return {...state, isLoggedIn: true, accessToken: action.payload};
    case actions.LOG_OUT:
      return {...state, isLoggedIn: false, accessToken: ''};
    default:
      return state;
  }
};
