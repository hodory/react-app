import * as firebase from 'firebase';

export const facebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    provider.addScope('user_birthday');
    provider.setCustomParameters({
        'display': 'popup'
    });
    return firebase.auth().signInWithPopup(provider);
};

export const google = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return firebase.auth().signInWithPopup(provider);
}