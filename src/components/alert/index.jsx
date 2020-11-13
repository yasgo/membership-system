import SweetAlert from 'sweetalert2-react'
import { useSelector, useDispatch } from 'react-redux'
import { ALERT_TOGGLE } from '../../redux/actions-types/alert'

const Alert = () => {

    const alertData = useSelector(state => state.alert)
    const dispatch = useDispatch()

    const onConfirm = () => {
        dispatch({
            type: ALERT_TOGGLE,
            isShow: false,
            isSuccess: false,
            message: ''
        })
    }

    return (
        alertData.isShow && (
            <SweetAlert
                show={alertData.isShow}
                text={alertData.message}
                icon='error'
                onConfirm={onConfirm}
            />
        )
    )
}

export default Alert