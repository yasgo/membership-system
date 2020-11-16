import './style.scss'
import { auth } from '../../firebase'

const Content = (props) => {
    return (
        <section className={auth.currentUser ? 'container' : 'full-screen'}>
            {props.children}
        </section>
    )
}

export default Content