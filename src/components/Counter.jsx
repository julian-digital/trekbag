export default function Counter({ totalNumberOfItems, numberOfPackedItems }) {
  return (
    <p>
      <b>{numberOfPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
