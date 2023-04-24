import Aboutus from "./components/Aboutus";
import BlogsSection from "./components/Blogs";
import ContactSection from "./components/Contact/Contact";
import Landing from "./components/Landing/Index";
import Status from "./components/stats";
import OurTeams from "./components/Teams";
import MainLayout from "./Layout/main";
function App() {
  return (
    <>
      <MainLayout>  
        <Landing/>
        <BlogsSection/>
        <Status/>
        <Aboutus/>
        <OurTeams/>
        <ContactSection/>
      </MainLayout>
    </>
  );
}
export default App;
