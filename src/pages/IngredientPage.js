import styles from './IngredientPage.module.css';

import {
 
} from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientDetails from '../components/IngredientDetails/IngredientDetails';

function IngredientPage() {
    return (
        <div className={styles.formpagecontent}>
            <IngredientDetails el={{
       "_id":"60666c42cc7b410027a1a9b7",
       "name":"Соус Spicy-X",
       "type":"sauce",
       "proteins":30,
       "fat":20,
       "carbohydrates":40,
       "calories":30,
       "price":90,
       "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
       "__v":0
         }} extraClass="ingredient_place_page" />
        </div>
    )
}

export default IngredientPage;