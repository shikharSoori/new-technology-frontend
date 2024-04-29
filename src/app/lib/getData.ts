export const getData = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

