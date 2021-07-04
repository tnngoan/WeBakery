import { useEffect, useState } from "react";

const Products = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const url =
        `https://api.buttercms.com/v2/content/cart/?auth_token=` +
        `b1458652919b213fc81af246f3bacf1e7672ee49`;
      console.log(process.env.auth_token);
      const res = await fetch(url);
      const { data } = await res.json();
      const allProducts = data.cart;
      setPosts([...allProducts]);
    }
    getPosts();
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-evenly md:grid-cols-4 xl:grid-flow-row flex-grow">
      {posts.length > 0
        ? posts.map((cake) => {
            return (
              <div
                key={cake.id}
                className="m-2 p-1 flex flex-col items-center justify-evenly"
              >
                <img width='283' height='283' src={cake.image} alt={`Preview of ${cake.name}`} />
                <h3 className="capitalize">{cake.name}</h3>
                <p>{cake.description}</p>
                <p>${cake.price}</p>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};

export default Products;
