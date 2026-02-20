import AboutPage from "./components/about";
import LandingPage from "./components/landing";

export default function Home() {
  return (
    <>
      <div className="">
        <LandingPage/>
      </div>

      <div className="mx-auto max-w-354">
        <AboutPage/>
      </div>

    </>      
  );
}
