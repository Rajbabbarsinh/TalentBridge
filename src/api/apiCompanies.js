import supabaseClient from "@/utils/supebase";

export async function getCompanies(token){
    const supabase = await supabaseClient(token);

    const { data, error: error } = await supabase
      .from("companies")
      .select("*")

    if (error) {
      console.error("Error fetching companies", error);
      return null; // Return null on error
    }
      return data
  }
