import styles from './EachCard.module.scss'
import { UilLocationPoint } from '@iconscout/react-unicons'

const EachCard = ({image}) => {
    return (
        <div className={styles.eachCard}>
            <figure className={styles.card_thumbnail}>
                <img src={`./${image}.jpg`} alt='post' />
                <div className={styles.username}>
                    <img src="./green-dot.png" alt="" />
                    <p>@funriya</p>
                </div>
                <div className={styles.user}>
                    <h1>Riya, <span>21</span></h1>
                    <img src="./shield.png" alt="" />
                    <img src="./heart.png" alt="" />
                </div>
                <div className={styles.location}>
                    <UilLocationPoint className={styles.location_icon} />
                    <p>Greenwich, 20 miles away</p>
                </div>
                <span>fun, crazy gorgeous</span>
            </figure>
        </div>
    )
}

export default EachCard