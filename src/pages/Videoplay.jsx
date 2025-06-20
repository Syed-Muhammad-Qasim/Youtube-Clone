import Navbar from "../components/Navbar";
import Streaming from "../components/Streaming";
import Recommendation from "../components/Recommendation";

const Videoplay = () => {
  return (
    <div>
        <Navbar />
        <div className="pt-16">
        <div className=" flex flex-col w-full h-screen md:flex-row md:ml-4 md:mt-2 gap-32">
        <Streaming />
        <Recommendation/>
        </div>
        </div>
    </div>
  )
}

export default Videoplay