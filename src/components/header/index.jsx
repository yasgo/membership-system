import './style.scss'
import Navigation from '../navigation'
import { auth } from '../../firebase'

const Header = () => {
    return (
        <header className={auth.currentUser ? null : 'fixed'}>
            <h1>Membership System</h1>
            <Navigation />
        </header>
    )
}

export default Header