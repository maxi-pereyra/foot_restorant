import NavigateRoutes from "./routes/Navigate"
import { CartProvider } from './context/cartProvider'

function App() {
  return (
       <>
       <CartProvider>
        <NavigateRoutes/>
       </CartProvider>
       </>
  )
}

export default App