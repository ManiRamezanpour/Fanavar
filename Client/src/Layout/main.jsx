
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
const MainLayout = ({children}) => {
  return (  
    <main>
      <Header />
      {children}
      <Footer/>
    </main>
  );
};

export default MainLayout;
