import { useState } from "react";
import MapPinSVG from "../CommonIcons/MapPinSVG";
export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <nav className="container mx-auto">
                <div className="flex justify-between items-center text-[var(--pg-1)]">
                    <div className="flex items-center cursor-pointer">
                        <MapPinSVG className="h-6 w-6" />
                        <span className="ml-2">Store Location:</span>
                        <span className="ml-2">
                            Lincoln- 344, Illinois, Chicago, USA
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span>Eng</span>
                            <span>USD</span>
                        </div>
                        <div>
                            {isLogin ? (
                                <div className="flex items-center gap-1 ">
                                    <button onClick={() => setIsLogin(false)}>
                                        Logout
                                    </button>
                                    <span className="text-xl">/</span>
                                    <button onClick={() => setIsLogin(false)}>
                                        Profile
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1 ">
                                    <button onClick={() => setIsLogin(true)}>
                                        Signin
                                    </button>
                                    <span className="text-xl">/</span>
                                    <button onClick={() => setIsLogin(true)}>
                                        Signup
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <h2>Navbar</h2>
        </>
    );
}
