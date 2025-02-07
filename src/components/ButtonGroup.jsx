import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsCompleted = useItemsStore((state) => state.markAllAsCompleted);
  const markAllAsIncompleted = useItemsStore(
    (state) => state.markAllAsIncompleted
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button type="secondary" onClick={markAllAsCompleted}>
        Mark all as complete
      </Button>
      <Button type="secondary" onClick={markAllAsIncompleted}>
        Mark all as incomplete
      </Button>
      <Button type="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button type="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
