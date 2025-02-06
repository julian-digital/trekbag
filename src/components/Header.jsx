import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { items } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        numberOfPackedItems={() => {
          return items.filter((item) => item.packed).length;
        }}
      />
    </header>
  );
}
