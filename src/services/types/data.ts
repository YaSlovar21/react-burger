
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

export type TIngredientInConstructor = TIngredient & {
    idtd: string; 
    index: number;
};

export type TOrder = {
    ingredients: string[];
    _id: string;
    name: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
}
  

export type TUser = {
    name: string;
    email: string;
    password: string;
}