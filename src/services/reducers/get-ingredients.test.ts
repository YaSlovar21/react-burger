import { testIngr } from "../../utils/test-data";
import { GET_INGREDIENTS_LIST_SUCCESS } from "../actions/get-ingredients";
import { getIngredientReducer, initialState } from "./get-ingredients"



describe('get ingredients reducer', () => {

    it('should return the initial state', () => {
        expect(getIngredientReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should set ingredients items to state', () => {
        expect(
            getIngredientReducer(
                initialState,
                {
                    type: GET_INGREDIENTS_LIST_SUCCESS,
                    ingredients: [testIngr, testIngr],
                }
            )
        ).toEqual({
            ...initialState,
            items: [testIngr, testIngr],
        })
    })

})