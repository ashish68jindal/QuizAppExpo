import { DATA_DETAILES_TYPE, QUESTION_LIST_TYPE } from "../actiontypes/DataTypes";

export const get_data_action = (data) => dispatch => {
      dispatch({ type: DATA_DETAILES_TYPE, data: data });
}

export const store_question_data_action = (data) => dispatch => {
      dispatch({ type: QUESTION_LIST_TYPE, data: data });
}

