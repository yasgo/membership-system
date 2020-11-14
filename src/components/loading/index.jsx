import './style.scss'
import { useSelector } from 'react-redux'

const Loading = () => {
    const isShow = useSelector(state => state.loading).isShow

    return (
        isShow && (
            <div className="loading">
                <div className="indicator">
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                    <div className="segment"></div>
                </div>
            </div>
        )
    )
}

export default Loading