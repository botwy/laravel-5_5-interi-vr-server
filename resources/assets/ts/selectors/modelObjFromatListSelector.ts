import { createSelector, defaultMemoize, createSelectorCreator } from 'reselect';
import {denormalize} from "normalizr";
import {simpleScheme} from "../schemes";
import isEqual from 'lodash/isEqual';

const entitySelector = state => state.entity;
const modelObjFromatIdsSelector = state => state.modelFormatObj.modelList;

export const denormalizeSelector = createSelector(
    [modelObjFromatIdsSelector, entitySelector],
    (modelIds, entity) => {
        const modelList = denormalize(
            {entityList: modelIds},
            {entityList: [simpleScheme]},
            entity
            )

        return modelList.entityList;
    }
)

export const modelObjFromatListSelector = createSelectorCreator(defaultMemoize, isEqual)(
    [denormalizeSelector],
    (model3dList) => {
        return model3dList.filter(model => model).sort((lhs, rhs) => lhs.title.localeCompare(rhs.title));
    }
)