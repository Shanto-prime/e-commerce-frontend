import { useState } from "react";
import MapPinSVG from "../CommonIcons/MapPinSVG";
import SearchSVG from "../CommonIcons/SearchSVG";
import Button from "../UI/Button/Button";
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
                <div className="flex justify-between items-center">
                    <div className="w-44">
                        <img src="/public/logo-text.png" alt="" />
                    </div>
                    <div className="flex items-center h-11.25">
                        <div className="flex p-1 gap-2 h-full items-center border border-[var(--pg-1)] rounded-l-[43px] rounded-r-none border-r-0">
                            <SearchSVG />
                            <input
                                className="border-0 outline-0"
                                type="text"
                                id="search"
                                placeholder="Search your goods here"
                            />
                        </div>
                        <Button className="rounded-l-none h-full">
                            Search
                        </Button>
                    </div>
                    <div>liked & cart</div>
                </div>
            </nav>
        </>
    );
}
