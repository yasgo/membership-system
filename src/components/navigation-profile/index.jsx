import './style.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const NavigationProfile = () => {
    return (
        <>
            <Link to='/profile'>Profile</Link>
            <ul>
                <li className="image" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/e7/18/12/e718121c71f92f23cc487cc27b118914.jpg)' }}></li>
                <li className="name">Yasin Burak Kalkan</li>
                <li className="button"><FontAwesomeIcon icon={faSignOutAlt} /> Çıkış Yap</li>
            </ul>
        </>
    )
}

export default NavigationProfile