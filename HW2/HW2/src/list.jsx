export default function ShoppingList({ items }) {
    if (items.length === 0) {
      return <p>list is empty</p>;
    }
else{
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
}
  }