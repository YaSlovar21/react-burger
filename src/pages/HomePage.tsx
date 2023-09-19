import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";

import styles from './HomePage.module.css';


import {
 
} from '@ya.praktikum/react-developer-burger-ui-components';
  

function HomePage() {
    return (

        <DndProvider backend={HTML5Backend}>
             <main className={styles.content}>
                <div className={styles.page}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </div>
            </main>
        </DndProvider>
    )
}

export default HomePage;