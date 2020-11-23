import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import fb from 'firebase'

const Profile = () => {
    const user = useSelector(state => state.firebase).user

    let [imageFile, setImageFile] = useState(null)

    let [name, setName] = useState(user.displayName)
    let [isNameEdit, setIsNameEdit] = useState(false)

    let [mail, setMail] = useState(user.email)
    let [isMailEdit, setIsMailEdit] = useState(false)

    useEffect(() => {
        setName(user.displayName)
        setMail(user.email)
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
            console.log('Resim yüklendi!')
            changeUserPhoto(downloadURL)
        });
    }

    const changeUserPhoto = (photoUrl) => {
        auth.currentUser.updateProfile({
            photoURL: photoUrl
        }).then(function () {
            console.log('Kullanıcının fotoğrafı değişti!')
        }).catch(function (error) {
            console.log('error: ', error)
        });
    }

    const getPhotoContent = () => {
        const hasPhoto = user.photoURL;
        const photoUrl = hasPhoto ? user.photoURL : 'https://via.placeholder.com/150x200';

        return <img src={photoUrl} alt='Profil' />
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
                        <td>Mail</td>
                        <td>
                            {
                                isMailEdit ? (
                                    <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                                ) : (
                                        user.email
                                    )
                            }
                        </td>
                        <td>
                            {
                                isMailEdit ? (
                                    <>
                                        <FontAwesomeIcon onClick={() => {
                                            auth.updateUser({
                                                email: mail
                                            }).then(function () {
                                                console.log('Kullanıcının maili değişti!')
                                                setIsMailEdit(false)
                                                setMail(user.email)
                                            }).catch(function (error) {
                                                console.log('error: ', error)
                                            });
                                        }} icon={faSave} />

                                        <FontAwesomeIcon onClick={() => {
                                            setIsMailEdit(false)
                                            setMail(user.email)
                                        }} icon={faTimes} />
                                    </>
                                ) : (
                                        <FontAwesomeIcon onClick={() => setIsMailEdit(true)} icon={faEdit} />
                                    )
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>{getPhotoContent()}</td>
                        <td><FontAwesomeIcon icon={faEdit} /></td>
                    </tr>
                </tbody>
            </Table>
            {
                user.photoURL && (
                    <img src={user.photoURL} alt="Profil" />
                )
            }
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
            <button onClick={onUploadImage}>Resmi yükle</button>
        </>
    )
}

export default Profile