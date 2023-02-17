import styles from './Main.module.scss'
import { UilBars } from '@iconscout/react-unicons'
import { UilExchange } from '@iconscout/react-unicons'
import EachSection from '../EachSection/EachSection'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.menuBar}>
                <div className={styles.category_list}>
                    <a className={styles.active} href="#">Match</a>
                    <a href="#">Following</a>
                    <a href="#">Followed by</a>
                </div>
                <div className={styles.menu_settings}>
                    <UilBars className={[styles.menu_icon, styles.setting].join(' ')} />
                    <UilExchange className={[styles.menu_icon, styles.setting].join(' ')} />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.inner_section}>
                    <EachSection images={['user-1','user-2','user-3','user-4']} />
                    <EachSection images={['user-5','user-6','user-7','user-8']}/>
                </div>
            </div>
        </div>
    )
}

export default Main