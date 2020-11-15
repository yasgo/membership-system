import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.firebase).user;

    return (
        <div>
            <p>Hoşgeldiniz {user && user.email}</p>
        </div>
    )
}

export default Home;