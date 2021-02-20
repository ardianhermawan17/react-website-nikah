export const FILL_FORM_N1 = "@formSelesai/fill_form_n1";
export const FILL_FORM_N2 = "@formSelesai/fill_form_n2";
export const FILL_FORM_N3 = "@formSelesai/fill_form_n3";
export const FILL_FORM_N4 = "@formSelesai/fill_form_n4";

export const mergeToFormFinish = () => async (dispatch, getState) => {

}

export const fillFormN1 = (data) => async (dispatch, getState) => {

  dispatch({
    type: FILL_FORM_N1,
    payload: {
      data
    }
  })

  return "Berhasil";
};

export const fillFormN2 = (data) => async (dispatch, getState) => {

  dispatch({
    type: FILL_FORM_N2,
    payload: {
      data
    }
  })

  return "Berhasil";
}

export const fillFormN3 = (data) => async (dispatch, getState) => {

  dispatch({
    type: FILL_FORM_N3,
    payload: {
      data
    }
  })

  return "Berhasil";
}

export const fillFormN4 = (data) => async (dispatch, getState) => {

  dispatch({
    type: FILL_FORM_N4,
    payload: {
      data
    }
  })

  return "Berhasil";
}
