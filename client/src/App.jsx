import axios from "axios";
import Layout from "./layout/Layout";

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <div className="bg-gray-500 w-full min-h-screen">
        <Layout />
      </div>
    </>
  );
};

export default App;
