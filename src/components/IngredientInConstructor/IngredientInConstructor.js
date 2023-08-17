import React, { useRef } from "react";

import {
    ConstructorElement,
    DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ITEM_FROM_CONSTRUCTOR, MOVE_INGREDIENTS } from "../../services/actions";
import { useDrag, useDrop } from "react-dnd";



function IngredientInConstructor({_id, name, price, image, idtd, index}) {
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
        hover(itemToPush) {
            const hoverIndex = index;
            const dragIndex = itemToPush.index;
            itemToPush.index = hoverIndex;
            /*dispatch({
                type: MOVE_INGREDIENTS,
                dragIndex,
                hoverIndex
            });*/
        }
    })
    dragRef(dropRef(ref));
    return (
        <li ref={ref} key={`${_id}-${index}`}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                extraClass="ml-2 mr-2"
                handleClose={(() => handleDelete(idtd))}
            />
        </li>
    );
}

export default IngredientInConstructor;
