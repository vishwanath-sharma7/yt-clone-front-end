import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Context from "../Context/Context";


export default function Home() {



  return (
    <Context>
      < div className="bg-[#282828] h-screen" >
        <Layout />
      </div>
    </Context>
  )
}