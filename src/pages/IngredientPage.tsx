import styles from './IngredientPage.module.css';

import {
 
} from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TIngredient } from '../utils/ts-types';
import React, { useMemo } from 'react';
import { getIngregients } from '../services/actions/get-ingredients';

function IngredientPage() {
    const { id } = useParams();
   
    const ingregients = useSelector((store: any) => store.ingredients.items);
    //Redux в данном спринте не трогаем
    const dispatch:any = useDispatch();
    
    React.useEffect(()=> {
      dispatch(getIngregients());
    }, [dispatch]);

    const ingr = useMemo(()=> ingregients.find((item: TIngredient) => item._id === id), [id, ingregients]);

    return (
        ingr && <div className={styles.formpagecontent}>
            <IngredientDetails el={ingr} extraClass="ingredient_place_page" />
        </div>
    )
}

export default IngredientPage;