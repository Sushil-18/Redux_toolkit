import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Items from "./Components/Items";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <>
      <Navbar />
      {showCart && <Cart />}
      <Items />
    </>
  );
}

export default App;
