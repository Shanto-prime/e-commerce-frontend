import MapPinSVG from "../CommonIcons/MapPinSVG";
import SearchSVG from "../CommonIcons/SearchSVG";
import Button from "../UI/Button/Button";
import Cart from "../UI/Checkbox/Cart";
import Heart from "../UI/Checkbox/Heart";
export default function Navbar({ cartItemCount, userStatus, setUserStatus }) {
    return (
        <>
            <section className="container mx-auto">
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
                            {userStatus ? (
                                <div className="flex items-center gap-1 ">
                                    <button
                                        onClick={() => setUserStatus(false)}
                                    >
                                        Logout
                                    </button>
                                    <span className="text-xl">/</span>
                                    <button
                                        onClick={() => setUserStatus(false)}
                                    >
                                        Profile
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1 ">
                                    <button onClick={() => setUserStatus(true)}>
                                        Signin
                                    </button>
                                    <span className="text-xl">/</span>
                                    <button onClick={() => setUserStatus(true)}>
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
                        <div className="flex p-1 px-2 gap-2 h-full items-center border border-[var(--pg-1)] rounded-l-md rounded-r-none border-r-0">
                            <SearchSVG />
                            <input
                                className="border-0 outline-0"
                                type="text"
                                id="search"
                                placeholder="Search your goods here"
                            />
                        </div>
                        <Button className="rounded-l-none rounded-r-md h-full">
                            Search
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Heart variant="ghost" />
                        <Cart variant="ghost" cartItemCount={cartItemCount} />
                    </div>
                </div>
            </section>
            <nav className="bg-[var(--dark-bg)]">
                <div className="container mx-auto flex justify-between">
                    <div className="flex items-center gap-2 text-white">
                        <button>Home</button>
                        <ul className="flex items-center justify-between text-white">
                            <li>
                                <a href="#">Featured Products</a>
                            </li>
                            <li>
                                <a href="#">New Arrivals</a>
                            </li>
                            <li>
                                <a href="#">Best Sellers</a>
                            </li>
                            <li>
                                <a href="#">Popular Categories</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <span>(215)-1234 1589</span>
                    </div>
                </div>
            </nav>
        </>
    );
}
