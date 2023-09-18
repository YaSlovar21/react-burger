
export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    image: string;
    price: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    image_mobile: string;
    image_large: string;
    __v: number;
};

export type TIngredientInConstructor = {
    name: string; 
    price: number; 
    image: string; 
    idtd: string; 
    index: number;
};