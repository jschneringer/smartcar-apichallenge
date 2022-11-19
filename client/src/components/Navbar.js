import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledNavbar } from "../styles";

const Navbar = () => {
  const { config } = useSelector((state) => state.config);

  // Active state to keep track of which page is currently active, adds .active class
  const [active, setActive] = useState("home");

  // hover cover change
  const hoverColor = (e) => {
    e.target.style.backgroundColor = "#e9edf2";
  };

  const removeColor = (e) => {
    e.target.style.backgroundColor = "";
  };

  const toggleActive = (e) => {
    const clicked = e.target.id;
    setActive(clicked);
  };

  return (
    <>
      <StyledNavbar>
        <Link
          to={"/smartcar-api-explorer/"}
          onMouseEnter={active !== "home" ? hoverColor : null}
          onMouseLeave={removeColor}
          onClick={toggleActive}
          style={{ textDecoration: "none", color: "#070a2cb3" }}
        >
          <div
            id="home"
            className={active === "home" ? "active NavBarItems" : "NavBarItems"}
          >
            Home
          </div>
        </Link>
        {config.configOptions &&
          config.configOptions.map((option, i) => (
            <Link
              to={"/smartcar-api-explorer/" + option.title.replace(/\s/g, "-")}
              onMouseEnter={
                active !== option.title.replace(/\s/g, "") ? hoverColor : null
              }
              onMouseLeave={removeColor}
              onClick={toggleActive}
              style={{ textDecoration: "none", color: "#070a2cb3" }}
              key={i}
            >
              <div
                id={option.title.replace(/\s/g, "")}
                className={
                  active === option.title.replace(/\s/g, "")
                    ? "active NavBarItems"
                    : "NavBarItems"
                }
              >
                {option.title}
              </div>
            </Link>
          ))}
      </StyledNavbar>
    </>
  );
};
//very active

export default Navbar;
