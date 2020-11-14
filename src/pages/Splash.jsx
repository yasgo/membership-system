import Content from '../components/content'
import Login from '../pages/Login'
import Register from '../pages/Register'

import MultipleContent from '../components/multiple-content'

const Splash = () => {

    const contents = [
        {
            title: 'Giriş Yap',
            content: Login
        },
        {
            title: 'Üye Ol',
            content: Register
        }
    ]

    return (
        <Content>
            <MultipleContent contents={contents} />
        </Content>
    )
}

export default Splash