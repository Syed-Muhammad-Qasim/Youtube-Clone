import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Datafetcher from "../components/Datafetcher";
const Home = () => {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Datafetcher />
      </div>
    </div>
  );
};

export default Home;
