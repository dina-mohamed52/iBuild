import { useState } from "react";
import { useQuery } from "react-query";
import {
  getProjectsApi,
  getProjectsDetailsApi,
} from "../../ApiServices/ProjectsApi";
import styles from "./TotalProjects.module.css";
import { CustomSelect } from "./Filter";
import ProjectsDetails from "../projects/ProjectsDetails";
import Spinner from "../../ui/Spinner";

export default function TotalProjects() {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery("projects", getProjectsApi);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error fetching data</div>;

  // Extracting all project locations
  const allLocations = [
    ...new Set(projects?.flatMap((project) => project.location)),
  ];

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleProjectClick = async (projectId) => {
    setDetailsLoading(true);
    try {
      const projectDetails = await getProjectsDetailsApi({ id: projectId });
      setSelectedProject(projectDetails);
      setShowDetails(true);
    } catch (error) {
      console.error("Error fetching project details:", error);
    } finally {
      setTimeout(() => {
        setDetailsLoading(false);
      }, 1000);
    }
  };

  const filteredProjects = selectedLocation
    ? projects.filter((project) => project.location === selectedLocation)
    : projects;

  return (
    <div>
      <CustomSelect
        options={[
          { value: "", label: "All Locations" },
          ...allLocations.map((location) => ({
            value: location,
            label: location,
          })),
        ]}
        name="All Locations"
        value={selectedLocation}
        onChange={handleSelectLocation}
      />
      <div
        className={`${styles.container} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`${styles.card} relative rounded-lg overflow-hidden shadow-md`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="relative">
              <img
                src={project.images}
                alt={project.projectName}
                className={`${styles.Img} w-full`}
              />
              <div className={`${styles.overlay}`}></div>
            </div>
            <div className={`${styles.textContainer} p-4`}>
              <h2 className={`${styles.projectHeader} text-3xl font-bold`}>
                {project.projectName}
              </h2>
              <div className={`${styles.subtextContainer} p-4`}>
                <p className="text-gray-600 capitalize">
                  <span className="mr-[7.5rem]"> location</span>{" "}
                  {project.location}
                </p>
                <p className="text-gray-600 capitalize ">
                  <span className="mr-[10rem]"> rooms </span> {project.roomsNum}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showDetails && selectedProject && (
        <ProjectsDetails
          project={selectedProject}
          detailsLoading={detailsLoading}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}
