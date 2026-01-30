import { useState } from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
export default function Layout() {
    const [isLogin, setIsLogin] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    return (
        <>
            <Navbar
                cartItemCount={cartItemCount}
                userStatus={isLogin}
                setUserStatus={setIsLogin}
            />
            <Home
                setCartItemCount={setCartItemCount}
                cartItemCount={cartItemCount}
            />
        </>
    );
}
