export const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'slug',
        type: 'slug',
        options: {
          source: 'productName', // Generates the slug based on the 'title' field
          maxLength: 200, // Optional: Limit the length of the slug
          slugify: (input: string) =>
            input
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special characters with '-'
              .replace(/^-+|-+$/g, ''), // Remove leading or trailing dashes
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'inventory',
        title: 'Inventory',
        type: 'number',
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Using Sanity's image type for image field
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  }