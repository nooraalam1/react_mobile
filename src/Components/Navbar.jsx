import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="text-xl flex justify-around items-center shadow-lg p-5">
          <div className="">
            <h1>Phone Shop</h1>
          </div>
            <div className="flex gap-5">
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
Home
</NavLink>
            <NavLink
  to="/favourites"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
Favourites
</NavLink>
            <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
Login
</NavLink>
            </div>
        </div>
    );
};

export default Navbar;