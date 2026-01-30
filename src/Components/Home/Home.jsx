export default function Home({ setCartItemCount, cartItemCount }) {
    return (
        <>
            <h3>Home Page</h3>
            <button onClick={() => setCartItemCount(cartItemCount + 1)}>
                add To Cart
            </button>
        </>
    );
}
