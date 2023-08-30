import AppHeader from "../components/AppHeader/AppHeader"


import styles from './PageNotFound404.module.css';

function PageNotFound404() {
    return(
        <div className={styles.formpagecontent}> 
           <h1 className="text text_type_main-medium">Упс, страница не найдена!</h1>
        </div>
    )
}

export default PageNotFound404;