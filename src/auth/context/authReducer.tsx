import { reducerActions } from "./reducerActions";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case reducerActions.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case reducerActions.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
