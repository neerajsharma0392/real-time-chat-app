import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useState, useEffect} from 'react';


export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        const isLoading = ! user;
        return {isLoading, user};
    });

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, user => {
            setUserDetails({isLoading: false, user})
        });
    }, []);

    return userDetails;
}