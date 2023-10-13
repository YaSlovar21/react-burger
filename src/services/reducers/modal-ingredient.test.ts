import { testIngr } from "../../utils/test-data";
import { SOME_INGR_VIEWING, SOME_INGR_VIEWING_CLEAR } from "../actions/modal-ingredient";
import { modalIngredientReducer, initialState } from "./modal-ingredient";



describe('modal with ingredient reducer', () => {

    it('should return the initial state', () => {
        expect(modalIngredientReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should set viewing ingredient', () => {
        expect(
            modalIngredientReducer(
                initialState,
                {
                    type: SOME_INGR_VIEWING,
                    ingredient: testIngr
                }
            )
        ).toEqual({
            ...initialState,
            viewingIngredient: testIngr,
        })
    });

    it('should clear viewing ingredient', () => {
        expect(
            modalIngredientReducer(
                initialState,
                {
                    type: SOME_INGR_VIEWING_CLEAR
                }
            )
        ).toEqual(initialState)
    })

});