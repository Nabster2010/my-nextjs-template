import { useTheme } from "next-themes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="font-roboto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
