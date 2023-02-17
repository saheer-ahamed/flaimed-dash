import styles from './EachSection.module.scss'
import EachCard from '../EachCard/EachCard'

const EachSection = ({images}) => {
    return (
        <div className={styles.eachSection}>
            <div className={styles.sectionHeading}>
                <h2>Today<span>(12)</span></h2>
                <hr />
                <p>View all</p>
            </div>
            <div className={styles.sectionBody}>
                <EachCard image={images[0]}/>
                <EachCard image={images[1]}/>
                <EachCard image={images[2]}/>
                <EachCard image={images[3]}/>
            </div>
        </div>
    )
}

export default EachSection