
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gyqdyk8a", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // Set to `false` for real-time data during development
  apiVersion: "2023-10-10", // Use a specific API version
});

// Utility function for fetching data
export async function SanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>; // Ensures params is a dictionary of key-value pairs
}): Promise<T> {
  return await client.fetch<T>(query, params);
}

/*import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gyqdyk8a", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // Set to `false` for real-time data during development
  apiVersion: "2023-10-10", // Use a specific API version
});

// Utility function for fetching data
export async function SanityFetch<T>({
  query,
  params = {}, // Default params to an empty object
}: {
  query: string;
  params?: Record<string, unknown>; // Ensures params is a dictionary of key-value pairs
}): Promise<T> {
  try {
    // Log query and params for debugging
    console.log("Fetching with query:", query);
    console.log("Using params:", params);

    // Execute the query with provided params
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw error; // Rethrow the error for further handling
  }
}*/
