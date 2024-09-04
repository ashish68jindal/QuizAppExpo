import {
  DATA_DETAILES_TYPE,
  QUESTION_LIST_TYPE,
} from "../actiontypes/DataTypes";
const initialState = {
  detailsStore: [],
  questionList: [],
};
export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_DETAILES_TYPE:
      return {
        ...state,
        detailsStore: action.data,
      };

    case QUESTION_LIST_TYPE: {
      return {
        ...state,
        questionList: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
