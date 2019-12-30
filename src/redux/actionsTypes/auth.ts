
import {createTypes} from 'reduxsauce';

export default createTypes(`
  SIGNUP_PENDING
  SIGNUP_SUCCESS
  SIGNUP_FAILURE

  SIGNIN_PENDING
  SIGNIN_SUCCESS
  SIGNIN_FAILURE

  SIGNOUT_USER

  GET_ID_TOKEN_FROM_USER
`, {
  prefix: 'auth/'
});
