import { useSelector } from 'react-redux'
import { useState } from 'react'
import { auth } from '../firebase'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import fb from 'firebase'

const Profile = () => {
    let [imageFile, setImageFile] = useState(null)

    const user = useSelector(state => state.firebase).user

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
                        <td>Yasin</td>
                        <td><FontAwesomeIcon icon={faEdit} /></td>
                    </tr>
                    <tr>
                        <td>Mail Adres</td>
                        <td>yasin@kalkan.com</td>
                        <td><FontAwesomeIcon icon={faEdit} /></td>
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