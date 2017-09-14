import * as firebase from 'firebase';
import * as firebaseService from './firebasedb';

export const facebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    provider.addScope('user_birthday');
    provider.setCustomParameters({
        'display': 'popup'
    });
    return firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        let user_info = result.additionalUserInfo.profile;
        window.sessionStorage.setItem("token", token);
        window.sessionStorage.setItem("email", user.email);
        window.sessionStorage.setItem("user_info", user_info);
        firebaseService.writeData(user_info.id, user.email, user_info, token);
    }).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
    });
};