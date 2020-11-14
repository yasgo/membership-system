import './style.scss'

const Content = (props) => {
    return (
        <section className="full-screen">
            {props.children}
        </section>
    )
}

export default Content