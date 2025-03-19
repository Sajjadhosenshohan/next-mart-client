"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createBrand = async (data: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
    method: "POST",
    headers: {
      Authorization: (await cookies()).get("accessToken")!.value,
    },
    body: data,
  });

  revalidateTag("brands")
  const result = await res.json();
  return result;
};

export const getBrands = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`,{
      next:{
        tags: ["brands"]
      }
    });
    const result = await res.json();
    return result;
  } catch (error:any) {
    return Error(error)
  }
};
export const deleteBrand = async (id:string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("brands")
    const result = await res.json();
    return result;
  } catch (error:any) {
    return Error(error)
  }
};
