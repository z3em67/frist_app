import "./product.css"
const products = [
  {
    title: "Nike Air Zoom",
    price: "$250",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },
  
  
  {
    title: "Puma Sport",
    price: "$200",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
  },
  {
    title: "Jordan Classic",
    price: "$400",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
  },
  {
    title: "Reebok Flex",
    price: "$220",
    img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6"
  },
  {
    title: "New Balance 574",
    price: "$280",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
  },
   {
    title: "Nike Air Zoom",
    price: "$250",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },
    {
    title: "Puma Sport",
    price: "$200",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
  },
  
  {
    title: "Adidas Ultraboost",
    price: "$350",
    img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b"
  },
  {
    title: "Puma Runner",
    price: "$210",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
  },
  
  {
    title: "Nike Free Run",
    price: "$230",
    img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634"
  },
  
 
  {
    title: "Puma Velocity",
    price: "$240",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
  },
   {
    title: "Puma Runner",
    price: "$210",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
  },
 
];

function Product({ title, price, img }) {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>High quality running shoes with modern style.</p>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Products() {
  return (
    <div className="products-container">
      {products.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  );
}

export default Products;