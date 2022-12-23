import { START_LOADER, STOP_LOADER } from "../types/loader";

const initState = {
  isLoading: false,
};

const reducer = (state = initState, action: { type: string }) => {
  switch (action.type) {
    case STOP_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case START_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
