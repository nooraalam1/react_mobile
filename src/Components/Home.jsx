import {useLoaderData } from "react-router-dom";
import Phone from "./Phone";

const Home = () => {
    const phones = useLoaderData()
    
    return (
        <div>
             <h2 className="text-center text-2xl">All Categories</h2>
          <div className="grid grid-cols-3">
          {
            phones?.map(phone=><Phone phone={phone}></Phone>)
          }
          </div>
        </div>
    );
};

export default Home;