import { testIngr } from "../../utils/test-data";
import { ADD_ITEM_TO_CONSTRUCTOR, DELETE_ITEM_FROM_CONSTRUCTOR, MOVE_INGREDIENTS } from "../actions/constructor";
import { constructorReducer, initialState } from "./constructor";

describe('constructor reducer', () => {

    it('should return the initial state', () => {
        expect(constructorReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle add bun to constructor', () => {
        expect(
            constructorReducer(
                initialState, 
                {
                    type: ADD_ITEM_TO_CONSTRUCTOR,
                    item1: {...testIngr, index: 2, idtd: '33777479-fbf1-4ad9-b64b-e07348c1023b'}, //testIngr - булка
                }
            )
        ).toEqual(
            {
                ...initialState,
                bun:  {...testIngr, index: 2, idtd: '33777479-fbf1-4ad9-b64b-e07348c1023b'},
            }
        )
    });

    it('should handle add !bun to constructor', () => {
        expect(
            constructorReducer(
                initialState,
                {
                    type: ADD_ITEM_TO_CONSTRUCTOR,
                    item1: {...testIngr, index:3, idtd: '2a119053-5e71-47a5-bda7-fa2d7133ef35', type: 'sauce'},
                }
            )
        ).toEqual(
            {
                ...initialState,
                ingrsInCart: [expect.objectContaining({...testIngr, index:3, idtd: '2a119053-5e71-47a5-bda7-fa2d7133ef35',type: 'sauce'})]
            }
        )
    })
    //что если в конструкторе уже есть элементы? нужен ли доп тест?

    it('should handle delete ingr from constructor', () => {
        expect(
            constructorReducer(
                {
                    bun: undefined,
                    ingrsInCart: [{...testIngr, index:3, idtd: '2a119053-5e71-47a5-bda7-fa2d7133ef35', type: 'sauce'}]
                },
                {
                    type: DELETE_ITEM_FROM_CONSTRUCTOR,
                    idtd: '2a119053-5e71-47a5-bda7-fa2d7133ef35',
                }
            )
        ).toEqual(
            {
                bun: undefined,
                ingrsInCart: [],
            }
        )
    });

    it('should handle moving ingredients in constructor', () => {
        expect(
            constructorReducer(
                {
                    bun: undefined,
                    ingrsInCart: [{...testIngr, index:3, idtd: '2a119053-5e71-47a5-bda7-fa2d7133ef35', type: 'sauce'}, {...testIngr, index:2, idtd: '2a119053-5e71-47a5-bda7-fa2d7133efff', type: 'sauce'}]
                },
                {
                    type: MOVE_INGREDIENTS,
                    dragIndex: 0,
                    hoverIndex: 1,
                }
            )
        ).toEqual(
            {
                bun: undefined,
                ingrsInCart: [{...testIngr, index:2, idtd: '2a119053-5e71-47a5-bda7-fa2d7133efff', type: 'sauce'}, {...testIngr, index:3, idtd: '2a119053-5e71-47a5-bda7-fa2d7133ef35', type: 'sauce'}],
            }
        )
    });



})