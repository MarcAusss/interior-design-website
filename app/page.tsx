import AboutPage from "./Landing/about";
import ContactPage from "./Landing/contact";
import ExpertiesPage from "./Landing/experties";
import LandingPage from "./Landing/landing";
import ProjectsPage from "./Landing/projects";

export default function Home() {
  return (
    <>
      <div className="my-10">
        <LandingPage/>
      </div>

      <div className="mx-auto max-w-354 my-10">
        <AboutPage/>
      </div>

      <div className="">
        <ProjectsPage/>
      </div>

      <div className="mx-auto max-w-354">
        <ExpertiesPage/>
      </div>

      <div className="">
        <ContactPage/>
      </div>
    </>      
  );
}
