export default function Footer() {
  return (
    <footer className="bg-white mt-12 px-6 py-8 text-center text-sm text-starbucksGreen shadow-inner rounded-t-3xl">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Mysore Coffee Hub.
      </p>
      <p className="text-gray-600">
        A Simple Project By Madan Y 
      </p>
    </footer>
  );
}
