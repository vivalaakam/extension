import app , {auth , database} from './firebase';

export const login = ({email, password}) => {
    return auth.signInWithEmailAndPassword(email, password)
        .then(user => ({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            id: user.uid,
            getToken: ::user.getToken
        }))
        .catch(error => {
            return {
                errorCode: error.code,
                errorMessage: error.message
            }

        })
};

export const logout = () => {
    return auth.signOut();
};
