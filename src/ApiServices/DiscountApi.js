import supabase from "./supabase";

export async function getDiscountApi() {
  try {
    const { data: Discount, error } = await supabase
      .from("Discount")
      .select("*");
    console.log("Discount data:", Discount);
    console.log("rrrrror:", Discount.Discount);

    if (error) {
      console.error("Error fetching projects:", error.message);
      return null;
    }
    return Discount;
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return null;
  }
}
