import * as firebase from 'firebase';

export const writeData = (userId, userEmail, userInfo, token) => {
    const database = firebase.database();
    database.ref('users/' + userId).set({
        email: userEmail,
        info: userInfo,
        access_token: token,
    });
}