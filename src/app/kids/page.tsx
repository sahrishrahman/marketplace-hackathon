import { client } from "@/sanity/lib/client";
import Link from 'next/link';

interface Product {
  _id: string;
  productName: string;
  description: string;
  quantity: number;
  price: number;
  image_url: string;
  rating: number;
}

const getProducts = async (): Promise<Product[]> => {
  const products = await client.fetch(
    `
    *[_type=="product"][0..4]{
      _id,
      productName,
      category,
      price,
      status,
      inventory,
      "image_url": image.asset->url,
      
    }
    `
  );
  return products;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={product.image_url}
        alt={product.productName}
        className="w-full h-48 object-cover rounded-md"
      />
      < Link href={"/singleproduct/slug"}  className="text-lg font-semibold mt-2">{product.productName}
      </Link>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 font-bold"> price:${product.price}</span>
       
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-blue-600 font-bold"> category:${product.category}</span>
       
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-red-600 font-bold"> status:${product.status}</span>
       
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-grey-600 font-bold">Items in stock:{product.inventory}</span>
       
      </div>
    </div>
  );
};

export default async function Women() {
  const products: Product[] = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}