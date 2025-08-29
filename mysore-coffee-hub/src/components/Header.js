'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal'; // Assuming you created reusable Modal.js from earlier


export default function Header() {
  const [modalOpen, setModalOpen] = useState(''); 
  // '' | 'store' | 'signup' | 'giftcards'

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div>
        <Image
          src="/assets/logo.png"
          alt="Mysore Coffee Hub Logo"
          width={200}
          height={100}
          style={{ width: '150px', height: 'auto' }}
        />
      </div>
      <nav className="space-x-6 font-bold text-starbucksGreen">
        {/* Convert <a> to buttons with onClick to open modals */}
        <button onClick={() => setModalOpen('menu')} className="hover:underline">Menu</button>
        <button onClick={() => setModalOpen('rewards')} className="hover:underline">Rewards</button>
        <button onClick={() => setModalOpen('giftcards')} className="hover:underline">Gift Cards</button>
        <button onClick={() => setModalOpen('store')} className="hover:underline">Find a Store</button>
        <button onClick={() => setModalOpen('signup')} className="hover:underline">Sign In</button>
      </nav>

      {/* Modals here */}
      <Modal isOpen={modalOpen === 'store'} onClose={() => setModalOpen('')} title="Find the Store">
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.310165530244!2d76.64905467509186!3d12.307220490688062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ca537a34df07%3A0x6d3d61944c435f39!2sMysore%2C%20Karnataka%20570001!5e0!3m2!1sen!2sin!4v1693289258840!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </Modal>

      <Modal isOpen={modalOpen === 'signup'} onClose={() => setModalOpen('')} title="Sign Up">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-starbucksGreen" />
          <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-starbucksGreen" />
          <input type="password" placeholder="Password" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-starbucksGreen" />
          <button
            type="submit"
            className="w-full bg-starbucksGreen text-white py-2 rounded font-semibold hover:bg-green-700 transition"
            onClick={(e) => {
              e.preventDefault();
              alert('Sign up placeholder');
              setModalOpen('');
            }}
          >
            Sign Up
          </button>
        </form>
      </Modal>

      <Modal isOpen={modalOpen === 'giftcards'} onClose={() => setModalOpen('')} title="Gift Cards">
        <p className="mb-4">
          Purchase Mysore-Coffee-Hub gift cards for your friends and family.
        </p>
        <button
          className="w-full bg-starbucksGold text-starbucksGreen py-2 rounded font-semibold hover:bg-yellow-400 transition"
          onClick={() => alert('Gift card purchase placeholder')}
        >
          Buy Gift Cards
        </button>
      </Modal>
    </header>
  );
}
