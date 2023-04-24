import { Children } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
const MainLayout = ({Children}) => {
  return (  
    <main>
      <Header />
      <Banner />
      {Children}
      <Footer/>
    </main>
  );
};

export default MainLayout;
