import Aboutus from "./components/Aboutus";
import BlogsSection from "./components/Blogs";
import ContactSection from "./components/Contact/Contact";
import Landing from "./components/Landing/Index";
import Status from "./components/stats";
import OurTeams from "./components/Teams";
import MainLayout from "./Layout/main";
import { useTranslation } from "react-i18next";
import { Router } from "react-router-dom";
import withRoota from "./withRoot";
function App() {
  const theme = useTheme();
  document.body.dir = i18n.dir();
  return (
    <>
      <MainLayout>
        <Landing />
        <BlogsSection />
        <Status />
        <Aboutus />
        <OurTeams />
        <ContactSection />
      </MainLayout>
    </>
  );
}
export default withRoot(App);
