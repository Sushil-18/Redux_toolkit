import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Items from "./Components/Items";
import { cartActions } from "../src/Store/cartSlice";
import { useSelector } from "react-redux";

function App() {
  const showcart = useSelector((state) => state.cart.showCart);
  console.log(showcart);
  return (
    <>
      <Navbar />
      {showcart && <Cart />}
      <Items />
    </>
  );
}

export default App;
