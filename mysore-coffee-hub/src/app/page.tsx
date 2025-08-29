import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedMenu from '../components/FeaturedMenu';
import RewardsSection from '../components/RewardsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mysore-Coffee-Hub</title>
        <meta
          name="description"
          content="Modern Starbucks-inspired web app demo with AI and Strapi CMS."
        />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <div className="min-h-screen bg-starbucksGray font-sans">
        <Header />
        <HeroSection />
        <FeaturedMenu />
        <RewardsSection />
        <Footer />
      </div>
    </>
  );
}
