import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-starbucksGray font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={48} height={48} />
        </div>
        <nav className="space-x-6 font-bold text-starbucksGreen">
          <a href="#">Menu</a>
          <a href="#">Rewards</a>
          <a href="#">Gift Cards</a>
          <a href="#">Find a Store</a>
          <a href="#">Sign In</a>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="relative bg-starbucksGreen text-white flex flex-col md:flex-row items-center justify-between py-12 px-6">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A Cozy Cup Awaits</h1>
          <p className="text-lg mb-6">Savor the moments. Explore new favorites and classic brews at every sip.</p>
          <a href="#" className="inline-block px-6 py-3 rounded-full bg-starbucksGold text-starbucksGreen font-bold hover:bg-white transition">
            See What's New
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/assets/hero.jpg" alt="Cafe Scene" width={400} height={300} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-12 px-6 py-8 text-center text-sm text-starbucksGreen shadow-inner">
        &copy; {new Date().getFullYear()} YourStarbucks. Inspired redesign for portfolio/demo use.
      </footer>
    </div>
  );
}
