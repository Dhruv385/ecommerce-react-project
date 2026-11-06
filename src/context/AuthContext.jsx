import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(localStorage.getItem('CurrentUserEmail') ? {email: localStorage.getItem('CurrentUserEmail')} : null);

    function signUp(email, password) {
        const user = JSON.parse(localStorage.getItem('user') || "[]");
        if(user.find(u => u.email===email)){
            return {success: false, error: 'Email already exists'}
        }
        const newUser = { email, password };
        user.push(newUser);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem("currentUserEmail", email);
        setUser({email});
        return {success: true};
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem('user') || "[]");
        const user = users.find(u => u.email===email && u.password===password);
        if(!user){
            return {success: false, error: 'Invalid email or password'}
        }
        localStorage.setItem("currentUserEmail", email);
        setUser({email});
        return {success: true};
    }

    function logout(){
        localStorage.removeItem('CurrentUserEmail');
        setUser(null);
    }

    return <AuthContext.Provider value={{signUp, user, logout, login}}>
            {children}
        </AuthContext.Provider>;
}
