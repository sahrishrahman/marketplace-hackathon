import { groq } from "next-sanity";


export const AllProducts=groq`*[_type == "product" && slug.current == $slug]{
  _id,
  productName,
  description,
  price,
  image_url:productImage[0].asset->url,
  color,
  category
}`
export const four =groq`*[_type=="product"][0..3]`;





    