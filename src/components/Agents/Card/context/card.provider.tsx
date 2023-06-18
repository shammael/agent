import { PropsWithChildren } from "react";
import { IAgent } from "../../../../types/Agent";
import CartContext from "./card.context";

interface Props {
  agent: IAgent;
}

const CartProvider = ({ children, agent }: PropsWithChildren<Props>) => {
  // const [state, setState] = useState(agent);

  return (
    <CartContext.Provider
      value={{
        agent,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
