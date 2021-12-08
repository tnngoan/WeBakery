import Image from "next/image";
import products from "../products.json";

const Products = () => {
  return (
    <div className="pt-0 mt-0 bg-white">
      <div className="flex justify-center">
        <button className="px-4 mt-4 mx-4 w-32 bg-yellow-800 text-white">Food</button>
        <button className="px-4 mt-4 mx-4 w-32 bg-yellow-800 text-white">Beverages</button>
      </div>
      <div className="pt-4 flex items-center justify-evenly grid grid-cols-3 grid-flow-row gap-4 md:grid-cols-4 xl:grid-cols-5 rounded-sm">
        {products.length > 0
          ? products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-evenly w-auto bg-gray-100"
                >
                  <Image
                    src={item.image}
                    alt={`Preview of ${item.name}`}
                    layout="fixed"
                    width={180}
                    height={240}
                  />
                  <h3 className="capitalize">{item.name}</h3>
                  <p className="text-xs font-mono overflow-ellipsis overflow-hidden ... p-4">
                    {item.description}
                  </p>
                  <p>${item.price}</p>
                  <button className="bg-yellow-800 text-white px-4 py-2 my-2 rounded-sm cursor-pointer">Add to cart</button>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default Products;
