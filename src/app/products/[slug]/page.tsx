import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Product } from '@/app/types/product'
import { groq } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'

interface ProductPageProps {
    params: Promise< {
        slug: string
    }>
}

async function getProduct(slug:string):Promise<Product >{
 return client.fetch(
    groq`*[_type== "product" && slug.current== $slug][0] {
     _id,
     productName,
    Price,
     description, 
      "imageUrl": productImage[].asset->url
    }`,{slug}
 )
}
export default async function ProductPageProps({ params }: ProductPageProps) {
    const {slug} =await params ;
    const product = await getProduct (slug)
    return (
        <div className="max-w-7xl mx-auto p-4 ">
            <div className='grid grid-col-1 md:grid-cols-2 gap-12'>
                <div className='aspect-square '>
                 {/* {product.image_url && (
                    <div className="border rounded-lg shadow-lg p-4">
                    <img
                      src={product.image_url}
                      alt={product.productName}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  */}
                    {product.imageUrl.map((url, index) => (
                        <Image
                            key={index}
                            src={url}
                            alt={`Product Image ${index + 1}`}
                            width={100}
                            height={100}
                            className="rounded-md object-cover max-h-28 max-w-28">
                        
                  
                    </Image>
                    
                    )
                  )
                }
                     </div>
                     
                     <div className='flex flex-col gap-8'>
                     <h1 className='text-4xl font-bold'>
                        {product.productName}
                        </h1>
                        <p className='text-2xl'>
                            {product.description}
                        </p>
                        </div>
                     </div>
                     </div>
                     
                           


                  )
                }

            