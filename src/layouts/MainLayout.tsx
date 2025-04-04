import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 2xl:px-64">
      {/* NAVBAR  */}
      <Navbar />
      <Outlet />
      {/* BREADCRUMP  */}
      {/* INTRODUCTION  */}
      {/* FEATURED POSTS  */}
      {/* POST LIST  */}
    </div>
  );
};

export default App;
