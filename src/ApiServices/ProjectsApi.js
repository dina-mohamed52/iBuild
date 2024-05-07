import supabase from "./supabase";

// Fetches all projects
export async function getProjectsApi() {
  try {
    const { data: projects, error } = await supabase
      .from("projects")
      .select("*");
    if (error) {
      console.error("Error fetching projects:", error.message);
      return null; 
    }
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return null; 
  }
}

// Fetches project details by projectId
export async function getProjectsDetailsApi({id}) {
  try {
   let { data: projectDetalis, error } = await supabase
     .from("projectDetalis")
     .select("*")
      .eq("projectId", id);
    if (error) {
      console.error("Error fetching project details:", error.message);
      return null;
    }
    return projectDetalis;
  } catch (error) {
    console.error("Error fetching project details:", error.message);
    return null;
  }
}
