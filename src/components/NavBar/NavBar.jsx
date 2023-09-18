import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/products/:id", name: "ProductDetail" },
  ];
  return (
    <nav className="p-6 bg-sky-300">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className=""></AiOutlineClose>
        ) : (
          <AiOutlineMenu className=""></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex rounded-lg font-semibold duration-700 absolute md:static bg-sky-300 px-6
      {
        ${open ? "top-16" : "-top-80"}
      }
      `}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
