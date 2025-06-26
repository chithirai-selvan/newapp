function Products() {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="/assets/gear.png" alt="Gear" />
          <h3>Industrial Gears</h3>
          <p>Durable, high-performance mechanical gears.</p>
        </div>
        <div className="product-card">
          <img src="/assets/valve.png" alt="Valve" />
          <h3>Pressure Valves</h3>
          <p>Reliable control for all your systems.</p>
        </div>
      </div>
    </section>
  );
}
export default Products;
