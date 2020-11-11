import fb from 'firebase';
import config from './config'

// export const auth = fb.auth();
// export const storage = fb.storage();
// export const database = fb.database();

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app()
export const auth = !fb.apps.length ? fb.initializeApp(config) : fb.auth()