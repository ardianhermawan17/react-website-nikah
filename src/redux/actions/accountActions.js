
export const REGISTER_EVENT_MARRIED_SUCCESS = '@account/register_event_married'
export const REGISTER_EVENT_MARRIED = '@account/register_event_married'
export const REGISTER = '@account/register';
export const REGISTER_SUCCESS = '@account/register_success';
export const LOGIN_SUCCESS = '@account/login_success';
export const LOGIN_FAILURE = '@account/login_failure';
export const LOGOUT = '@account/logout';

export const register_event_married = (date, citizen) => async (dispatch) => {

  try{
    const eventMarried = {
      date,
      citizen
    }

    dispatch({
      type: REGISTER_EVENT_MARRIED_SUCCESS,
      payload: {
       eventMarried
      }
    })

    return 'Berhasil';
  } catch (error){
    throw error
  }

}

export const register = (
  username,
  fullname,
  email,
  password
) => async (dispatch, getState) => {
  try {
    const user = {
      username,
      fullname,
      email,
      password,
      role : 'Couple'
    }

    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        user
      }
    })

    return 'Couple';
  } catch (error){

    throw error;
  }
}

export const login = (username, password) => async (dispatch, getState) => {
    try {
      const role = getState().account.user.role;
      const user = {
        username,
        password,
        role
      }

      dispatch({
        type : LOGIN_SUCCESS,
        payload : {
          user
        }
      })

      return role;
    } catch (error) {
      dispatch({ type : LOGIN_FAILURE});
      throw error;
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
}
