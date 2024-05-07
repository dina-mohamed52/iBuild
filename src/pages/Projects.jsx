
import TotalProjects from "../component/projects/Totalprojects";
import Logo from "../assets/images/loggoo.png"
import styles from "./Projects.module.css"
function Projects() {
 

  return (
    <>
      <div className="  h-[8rem]  bg-gradient-to-r from-black to-[#cca95dc5] flex justify-between items-center">
        <h1 className={`${styles.title}  capitalize pb-2 mb-[-2rem] text-5xl mt-0 text-[beige] italic `}>
          our projects
        </h1>
        <img src={Logo} className="w-[12rem] h-[10rem]" alt="logo" />
      </div>

      <TotalProjects />
    </>
  );
}

export default Projects;
