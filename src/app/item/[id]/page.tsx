import Footer from './Footer';
import ProductCard from './ProductCard';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="grow ">
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
