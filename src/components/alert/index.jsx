import SweetAlert from 'sweetalert2-react'
import { ALERT_LANGUAGE } from '../../helper/language'
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
                text={ALERT_LANGUAGE[alertData.message]}
                type={alertData.isSuccess ? 'success' : 'error'}
                confirmButtonText={'Tamam'}
                onConfirm={onConfirm}
            />
        )
    )
}

export default Alert