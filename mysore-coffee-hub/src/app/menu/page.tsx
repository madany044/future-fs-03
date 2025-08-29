import ProductList from "../../components/ProductList";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Our Menu</h1>
        {/* Product list from Strapi */}
        <ProductList />
      </div>
    </main>
  );
}
