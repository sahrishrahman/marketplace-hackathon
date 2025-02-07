import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import { client } from '@/sanity/lib/client';
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: { slug: string }; // Fixed type
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      category,   // ✅ Added missing comma
      image,
      price,
      colors,
      status,
      inventory,
      description
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // ✅ No need for await
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <img
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold mb-4">{product.productName}</h1>
          <p className="text-2xl font-semibold text-green-600">Category:{product.category}</p>
          <p className="text-2xl font-semibold text-red-600">Price:${product.price}</p>
          {/* ✅ Display Colors */}
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>


          
          <p className="text-xl font-semibold text-blue-600">status:{product.status}</p>
          <p className="text-xl font-semibold text-blue-600"> In Stock:{product.inventory}</p>
          <p className="text-lg text-gray-800">Details:{product.description}</p>
        </div>
      </div>
    </div>
  );
}


   

            
