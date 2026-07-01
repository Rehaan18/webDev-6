import React from "react";
const AuthContext = React.createContext;
const AuthProvider = ()=>{
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{

        // if(user){
        //     setIsLogin(true);
        // } else {
        //     setIsLogin(false);
        // }
        setIsLogin(!!user);
    }, [user]);

    const value = {
        user, 
        setUser,
        isLogin,
        setIsLogin,
    };
    return <AuthContext.Provider value ={value}></AuthContext.Provider>;
};

