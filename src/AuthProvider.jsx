/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase/firebase.config"

export const AuthContext = createContext(null);

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const AuthProvider = ({ children }) => {
    const authInfo = {
        name: "B",
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;