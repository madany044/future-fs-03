'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function FeaturedMenu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/menu-items?populate=image')

      .then((res) => {
        setMenuItems(res.data.data);
        console.log('Fetched menu items:', res.data.data);
      })
      .catch((err) => {
        console.error('Error fetching menu items:', err);
      });
  }, []);

  return (
    <section id="menu" className="bg-starbucksGray min-h-[60vh] py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-starbucksGreen text-center drop-shadow-md">
        Featured Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.length === 0 && <p>Loading menu items...</p>}
       {menuItems.map((item) => {
  const imageUrl = item.image?.url
    ? `http://localhost:1337${item.image.url}`
    : '/fallback-image.jpg';

  return (
    <div key={item.id} className="...">
      <Image
        src={imageUrl}
        alt={item.title || 'Featured menu item'}
        width={450}
        height={300}
        className="object-cover w-full h-56"
        priority
      />
      <div className="p-5">
        <h3 className="font-semibold text-2xl mb-2 text-starbucksGreen">{item.title}</h3>
        <p className="text-gray-700">{item.Discription[0]?.children[0]?.text}</p>
      </div>
    </div>
  );
})}


      </div>
    </section>
  );
}
