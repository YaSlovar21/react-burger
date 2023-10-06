import styles from './IngredientPage.module.css';

import {
 
} from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { TIngredient } from '../services/types/data';
import React, { useMemo } from 'react';
import { getIngregients } from '../services/actions/get-ingredients';

function IngredientPage() {
    const { id } = useParams();
   
    const ingregients = useSelector((store) => store.ingredients.items);
    //Redux в данном спринте не трогаем
    const dispatch = useDispatch();
    
    React.useEffect(()=> {
      dispatch(getIngregients());
    }, [dispatch]);

    const ingr = useMemo(()=> ingregients.find((item: TIngredient) => item._id === id), [id, ingregients]);

    if (ingr) {
        return (
         <div className={styles.formpagecontent}>
            <IngredientDetails el={ingr} extraClass="ingredient_place_page" />
        </div> 
    )} else {
        return (
            <></>
        )
    }
}

export default IngredientPage;