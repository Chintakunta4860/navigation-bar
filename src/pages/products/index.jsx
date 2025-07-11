import { Link } from 'react-router-dom'

const Products = () => {
  const products = [
    { id: 1, name: 'Premium Headphones', price: 2500 },
    { id: 2, name: 'Wireless Keyboard', price: 3000 },
    { id: 3, name: 'Bluetooth Speaker', price: 1500 },
    { id: 4, name:  'Smartwatch Pro', price: 5200 },
    { id: 5, name:  'Portable Charger 10000mAh', price: 899 },
    { id: 6, name:  'LED Desk Lamp', price: 1199 },
    
  ]

  return (
    <div className="page products">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)}</p>
            <Link 
              to={`/products/${product.id}`}
              className="view-details"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products