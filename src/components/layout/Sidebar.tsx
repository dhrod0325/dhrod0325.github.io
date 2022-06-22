import sidebar from "@/assets/css/style.module.scss";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className={sidebar.sidebar}>
      <h1>
        <NavLink to={`/`}>DEV.dhrod0325</NavLink>
      </h1>
      <nav>
        <li>
          <NavLink to={`/`}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to={`/posts`}>POSTS</NavLink>
        </li>
      </nav>
    </aside>
  );
};
