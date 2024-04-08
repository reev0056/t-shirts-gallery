const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1,
  },
  {
    title: "Green T-Shirt",
    image: "green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Grey T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1,
  },
  {
    title: "Light Green T-Shirt",
    image: "light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Purple T-Shirt",
    image: "purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Red T-Shirt",
    image: "red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1,
  },
  {
    title: "Teal T-Shirt",
    image: "teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1,
  },
];

function App() {
  return (
    <div className="container">
      <h1>T-Shirts</h1>
      <DisplayTshirts />
    </div>
  );
}

function DisplayTshirts() {
  return (
    <div className="Tshirt-container">
      {tshirts.map((tshirt, index) => (
        <Tshirt cloth={tshirt} key={index} />
      ))}
    </div>
  );
}

function Tshirt({ cloth }) {
  const imagePath = `./images/${cloth.image}`;
  const [buyTshirt, setbuyTshirt] = React.useState(1);

  const handleBuy = () => {
    if (buyTshirt > 0 && buyTshirt <= cloth.stock) {
    
      const updatedTshirts = tshirts.map((t) =>
        t.title === cloth.title ? { ...t, stock: t.stock - buyTshirt } : t
      );
  
      tshirts.length = 0;
      Array.prototype.push.apply(tshirts, updatedTshirts);
    } else {
      
    }

  };

  return (
    <div>
      <img src={imagePath} alt={cloth.image} />
      <h2>{cloth.title}</h2>
      <h3>
        <em>${cloth.price}</em>
      </h3>
      <p>Remaining Stock: {cloth.stock}</p>
      {cloth.stock > 0 ? (
        <>
          <label htmlFor={`quantity-${cloth.title}`}>Quantity:</label>
          <select
            id={`quantity-${cloth.title}`}
            value={buyTshirt}
            onChange={(e) => setbuyTshirt(Number(e.target.value))}
          >
            {[...Array(cloth.stock).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button onClick={handleBuy}>Buy</button>
        </>
      ) : (
        <p style={{ color: "red" }}>Out of Stock</p>
      )}
    </div>
  );
}

root.render(<App />);
