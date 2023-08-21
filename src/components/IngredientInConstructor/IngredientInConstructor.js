import React, { useRef } from "react";
import PropTypes from 'prop-types';

import {
    ConstructorElement,
    DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import { DELETE_ITEM_FROM_CONSTRUCTOR, MOVE_INGREDIENTS } from "../../services/actions/constructor";

import styles from './IngredientInConstructor.module.css';

function IngredientInConstructor({name, price, image, idtd, index}) {
    const dispatch = useDispatch();
    const ref = useRef(null)
    function handleDelete(id) {
        dispatch({
            type: DELETE_ITEM_FROM_CONSTRUCTOR,
            idtd: id
        })
    }

    const [{isDragging},dragRef] = useDrag({
        type: 'idragging',
        item: {
            index
        },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging()
            }
        }
    })

    const [, dropRef] = useDrop({
        accept: 'idragging',
        hover(itemToPush, monitor) {
            const hoverIndex = index;
            const dragIndex = itemToPush.index;
            if (dragIndex === hoverIndex) {
                return;
            }
            
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
        
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({
                type: MOVE_INGREDIENTS,
                dragIndex,
                hoverIndex
            });
            itemToPush.index = hoverIndex;
        }
    })
    dragRef(dropRef(ref));
    return (
        <li ref={ref}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                extraClass="ml-2"
                handleClose={(() => handleDelete(idtd))}
            />
        </li>
    );
}

IngredientInConstructor.propTypes = {
        name: PropTypes.string, 
        price: PropTypes.number, 
        image: PropTypes.string, 
        idtd: PropTypes.string, 
        index: PropTypes.number
};


export default IngredientInConstructor;
