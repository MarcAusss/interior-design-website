import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import ExpertiesPage from "./components/experties";
import LandingPage from "./components/landing";
import ProjectsPage from "./components/projects";

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

      <div className="mx-auto max-w-354 h-screen">
        <ExpertiesPage/>
      </div>

      <div className="">
        <ContactPage/>
      </div>
    </>      
  );
}
