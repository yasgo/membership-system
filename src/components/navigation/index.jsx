import { auth } from '../../firebase';
import NavigationProfile from '../navigation-profile'

const Navigation = () => (
    <nav>
        {
            auth.currentUser && (
                <NavigationProfile />
            )
        }
    </nav>
)

export default Navigation