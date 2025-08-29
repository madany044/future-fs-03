import Image from "next/image";
import { items } from "../data/items"; // adjust if data is elsewhere

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {items.map((item) => (
        <div key={item.id} className="p-4 shadow rounded-xl bg-white">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            style={{ width: "100%", height: "auto" }}
          />
          <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
