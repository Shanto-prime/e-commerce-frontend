import { useState } from "react";
import MapPinSVG from "../CommonIcons/MapPinSVG";
export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <nav className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center cursor-pointer">
                        <MapPinSVG className="h-6 w-6" />
                        <span className="ml-2">Location</span>
                        <span className="ml-2">City</span>
                    </div>
                    <div>
                        {isLogin ? (
                            <button onClick={() => setIsLogin(false)}>
                                Logout
                            </button>
                        ) : (
                            <button onClick={() => setIsLogin(true)}>
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            <h2>Navbar</h2>
        </>
    );
}
