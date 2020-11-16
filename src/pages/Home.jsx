import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.firebase).user;

    return (
        <>
            <p>Hoşgeldiniz {user && user.email}</p>
        </>
    )
}

export default Home;