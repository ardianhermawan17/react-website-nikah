import produce from "immer";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_EVENT_MARRIED_SUCCESS
} from "../actions/accountActions";

const initialState = {
  user : {
    // namaKeluarga: 'Ardian',
    // username : "Sebuah nama",
    // email : "sengoku403@gmail.com",
    // password : "12345",
    role: "Couple"
  },
  citizen: '',
  marriedDate: {
    day : 0,
    month: 0,
    year: 0,
  },
  // UI
  errorStatus : false
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { user } = action.payload;

      return produce(state, (draft) => {
        draft.user = user;
      });
    }

    case LOGIN_FAILURE : {
      return produce(state, (draft) => {
        draft.errorStatus = true;
      })
    }

    case REGISTER_SUCCESS: {
      const { user } = action.payload;

      return produce(state, (draft) => {
        draft.user = user;
      })
    }

    case REGISTER_EVENT_MARRIED_SUCCESS: {
      const { eventMarried } = action.payload;
      const day = eventMarried.date.getDate();
      const month = eventMarried.date.getMonth();
      const year = eventMarried.date.getFullYear();
      const marriedDate = {
        day,
        month,
        year
      }

      return produce(state, (draft) => {
        draft.citizen = eventMarried.citizen;
        draft.marriedDate = marriedDate
      })
    }

    case LOGOUT: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign,no-unused-vars
        draft = initialState;
      })
    }

    default : {
      return state;
    }
  }
};

export default accountReducer;
