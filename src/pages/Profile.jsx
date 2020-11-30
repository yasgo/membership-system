import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Table, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import fb from 'firebase'

const Profile = () => {
    const user = useSelector(state => state.firebase).user

    let [imageFile, setImageFile] = useState(null)

    let [name, setName] = useState(user.displayName)
    let [isNameEdit, setIsNameEdit] = useState(false)
    let [photoUrl, setPhotoUrl] = useState(user.photoURL ? user.photoURL : 'https://via.placeholder.com/150x200')

    useEffect(() => {
        setName(user.displayName)
        setPhotoUrl(user.photoURL)
    }, [user])

    const onUploadImage = () => {
        let metadata = { contentType: 'image/jpeg' }
        let storageRef = fb.storage().ref(`profil-pictures/${imageFile.name}`)

        storageRef.put(imageFile, metadata).then((snapshot) => {
            getUploadImageUrl(snapshot)
        }, (error) => {
            console.log('error: ', error);
        });
    }

    const getUploadImageUrl = (snapshot) => {
        snapshot.ref.getDownloadURL().then(function (downloadURL) {
            changeUserPhoto(downloadURL)
        });
    }

    const changeUserPhoto = (photoUrl) => {
        auth.currentUser.updateProfile({
            photoURL: photoUrl
        }).then(function () {
            setPhotoUrl(user.photoURL)
        }).catch(function (error) {
            console.log('error: ', error)
        });
    }

    return (
        <>
            <h3>Profil Düzenleme Sayfası</h3>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td>İsim</td>
                        <td>
                            {
                                isNameEdit ? (
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                ) : (
                                        user.displayName
                                    )
                            }
                        </td>
                        <td>
                            {
                                isNameEdit ? (
                                    <>
                                        <FontAwesomeIcon onClick={() => {
                                            auth.currentUser.updateProfile({
                                                displayName: name
                                            }).then(function () {
                                                console.log('Kullanıcının adı değişti!')
                                                setIsNameEdit(false)
                                                setName(user.displayName)
                                            }).catch(function (error) {
                                                console.log('error: ', error)
                                            });
                                        }} icon={faSave} />

                                        <FontAwesomeIcon onClick={() => {
                                            setIsNameEdit(false)
                                            setName(user.displayName)
                                        }} icon={faTimes} />
                                    </>
                                ) : (
                                        <FontAwesomeIcon onClick={() => setIsNameEdit(true)} icon={faEdit} />
                                    )
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <Row>
                                <Col md={12} className="mb-3">
                                    <img width="150" src={photoUrl} alt='Profil' />
                                </Col>
                                <Col md={12} className="mb-3">
                                    <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
                                </Col>
                                <Col md={12}>
                                    <button onClick={onUploadImage}>Resmi yükle</button>
                                </Col>
                            </Row>
                        </td>
                        <td><FontAwesomeIcon icon={faEdit} /></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Profile