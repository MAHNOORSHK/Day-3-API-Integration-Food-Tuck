import { defineQuery } from "next-sanity";

// Fetch all food items
export const allFoodsQuery = defineQuery( `
  *[_type == "food"] {
    name,
    price,
    originalPrice,
    description,
    available,
    "imageUrl": image.asset->url
  }
`)

// console.log(allFoodsQuery)

export const allChefsQuery = defineQuery( `
    *[_type == "chef"] {
      name,
      position,
      experience,
      specialty,
      description,
      available,
      "imageUrl": image.asset->url
    }
  `)
