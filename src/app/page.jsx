import styles from './page.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import PaginationBar from '../components/PaginationBar/PaginationBar'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.major_section}>
          <Sidebar />
          <Main />
        </div>
        <PaginationBar />
        <Footer />
      </div>
    </>
  )
}
