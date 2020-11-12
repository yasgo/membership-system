import { useSelector } from 'react-redux'
import { useState } from 'react'
import fb from 'firebase'

const Profile = () => {
    let [imageFile, setImageFile] = useState(null)

    const user = useSelector(state => state.firebase).user

    console.log('profil user: ', user)

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
            console.log('change profil image: ', downloadURL)
        });
    }

    return (
        <div>
            <h3>Profil</h3>
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
            <button onClick={onUploadImage}>Resmi yükle</button>
        </div>
    )
}

export default Profile