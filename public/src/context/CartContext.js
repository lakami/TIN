import {createContext, useContext, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Cart from "../components/cart/Cart";


const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

    //otwiera popup z koszykiem
    const openCart = () => setIsCartOpen(true);
    //zamyka popup z koszykiem
    const closeCart = () => setIsCartOpen(false);
    //ilość danego produktu w koszyku
    const getItemQuantity = (id) => {
        var idn = parseInt(id)
        console.log(cartItems);
        console.log(id + "looking for " + idn)
        return cartItems.find(item => item.id === idn).quantity;
    }
    //całkowita ilość produktów w koszyku
    const getCartSize = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);
    //zwiększenie o jeden ilości danego produktu w koszyku
    const increaseItemQuantity = (id) => {
        var idn = parseInt(id)
        setCartItems(currItems => {
            if (currItems.find(item => item.id === idn) == null) {
                return [...currItems, { id: idn, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === idn) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    };
    //zmniejsza ilość danego produktu w koszyku o 1
    const decreaseItemQuantity = (id) => {
        var idn = parseInt(id)
        setCartItems(currItems => {
            if (currItems.find(item => item.id === idn)?.quantity === 1) {
                return currItems.filter(item => item.id !== idn)
            } else {
                return currItems.map(item => {
                    if (item.id === idn) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    };
    //całkowicie usuwa produkt z koszyka
    const deleteItem = (id) => {
        var idn = parseInt(id)
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== idn)
        })
    };

    //przechodzi do podsumowania zamówienia
    const goToSummary = () => {
        setIsCartOpen(false);
        window.location.href = "/summary";
    }

    return (
        <CartContext.Provider value={
            {
                cartItems,
                openCart,
                closeCart,
                getItemQuantity,
                getCartSize,
                increaseItemQuantity,
                decreaseItemQuantity,
                deleteItem,
                goToSummary,
                clearCart: () => setCartItems([]),
            }
        }>
            {children}
            <Cart isOpen={isCartOpen}/>
        </CartContext.Provider>
    );
}

export default CartProvider;