import styles from './PaginationBar.module.scss'

const PaginationBar = () => {
    return (
        <div className={styles.pagination}>
            <button className={[styles.page_btn, styles.arrow_left].join(' ')}>{`<`}</button>
            <button className={[styles.page_btn, styles.border_btn].join(' ')}>1</button>
            <button className={[styles.page_btn, styles.muted_btn].join(' ')}>2</button>
            <button className={[styles.page_btn, styles.muted_btn].join(' ')}>...</button>
            <button className={[styles.page_btn, styles.muted_btn].join(' ')}>9</button>
            <button className={[styles.page_btn, styles.muted_btn].join(' ')}>10</button>
            <button className={[styles.page_btn, styles.border_btn].join(' ')}>{`>`}</button>
        </div>
    )
}

export default PaginationBar