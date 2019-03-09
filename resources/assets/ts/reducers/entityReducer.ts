import {handleActions} from "redux-actions";
import {
  MERGE_ENTITIES
} from "../constants/actionTypes";
import {IEntityState} from '../models'

export const entity = handleActions<IEntityState, {entityData: any, entityName: string}>({
  [MERGE_ENTITIES]: (state, action) => {
      const { entityData, entityName } = action;

      return ({
          ...state,
          [entityName]: {...state[entityName], ...entityData[entityName]},
      });
  }

}, {
  model3d: {},
})