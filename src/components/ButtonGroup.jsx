import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsCompleted,
    handleMarkAllAsIncompleted,
  } = useItemsContext();
  return (
    <section className="button-group">
      <Button type="secondary" onClick={handleMarkAllAsCompleted}>
        Mark all as complete
      </Button>
      <Button type="secondary" onClick={handleMarkAllAsIncompleted}>
        Mark all as incomplete
      </Button>
      <Button type="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button type="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
