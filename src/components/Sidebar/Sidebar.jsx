import Image from 'next/image'
import styles from './Sidebar.module.scss'
import { Uil0Plus } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilComments } from '@iconscout/react-unicons'
import { UilQuestionCircle } from '@iconscout/react-unicons'
import { UilUserSquare } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilRocket } from '@iconscout/react-unicons'

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
            <div className={styles.logoDiv}>
              <img src="./flaimed.JPG" alt="" />
            </div>
            <div className={styles.menuDiv}>
              <ul>
                <li>
                  <Uil0Plus className={styles.icon} />
                  <span>Matches</span>
                </li>
                <li>
                  <UilPlayCircle className={styles.icon} />
                  <span>Reels</span>
                </li>
                <li>
                  <UilHeart className={styles.icon} />
                  <span>Favourite</span>
                </li>
                <div className={styles.favourite_menu}>
                  <li className={styles.active}>Follow</li>
                  <li>Visitors</li>
                  <li>Blocked</li>
                  <li>Saved Videos</li>
                </div>

                <li>
                  <UilComments className={styles.icon} />
                  <span>Message</span>
                </li>
                <li>
                  <UilQuestionCircle className={styles.icon} />
                  <span>Help</span>
                </li>
                <li>
                  <UilUserSquare className={styles.icon} />
                  <span>Profile</span>
                </li>
                <li>
                  <UilSetting className={styles.icon} />
                  <span>Setting</span>
                </li>
              </ul>
            </div>
            <div className={styles.banner_ads}>
              <div className={styles.ad_card}>
                <UilRocket className={styles.rocket_icon} />
                <div>
                  <p>Boost your profile</p>
                  <p>Become a pro</p>
                </div>
              </div>
              <button className={[styles.btn, styles.btn_upgrade].join(' ')}>Upgrade</button>
            </div>
          </div>
  )
}

export default Sidebar