import { DEFAULT_STATE } from "../types/dashborad";

const initState = {};

const reducer = (state = initState, action: { type: string; data: any }) => {
  switch (action.type) {
    case DEFAULT_STATE:
      return state;
    default:
      return state;
  }
};

export default reducer;
