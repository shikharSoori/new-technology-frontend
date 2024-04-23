export const getData = async (url: string) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${baseURL}/${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
