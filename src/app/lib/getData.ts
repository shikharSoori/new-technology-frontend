import { unstable_noStore as noStore } from "next/cache";
export const getData = async (url: string) => {
  noStore();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    method: "GET",
    next: { revalidate: 500 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

// export const productCount = async (brandId: number) => {
//   const data = await getData(
//     `product-app/product?ordering=-id&brand_id=${brandId}`
//   );
//   const productCounts = data?.count;
//   return productCounts;
// };

export const fetchData = async (setBrands: any) => {
  noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-app/brand`,
      { method: "GET", next: { revalidate: 500 } }
    );
    const jsonData = await response.json();
    setBrands(jsonData.results);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const fetchWhySoori = async () => {
  const data = await getData(`product-app/whySoori`);
  const whySoori = data?.count;
  return whySoori;
};
