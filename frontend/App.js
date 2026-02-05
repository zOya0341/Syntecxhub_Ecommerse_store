import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // get products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // add product
  const addProduct = async () => {
    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        price
      })
    });

    setName("");
    setPrice("");
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <input
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <br /><br />

      <button onClick={addProduct}>Add</button>

      <hr />

      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>
          {p.name} - Rs {p.price}
        </div>
      ))}
    </div>
  );
}

export default App;
