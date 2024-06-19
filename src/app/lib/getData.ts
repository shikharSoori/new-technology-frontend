export const getData = async (url: string) => {
  // noStore();
  let data;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
      // cache: "no-store",
    });
    data = await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
  //   cache: "no-store",
  // });
  // if (!response.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // const data = await response.json();
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
  // noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-app/brand`
      // { cache: "no-store" }
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
