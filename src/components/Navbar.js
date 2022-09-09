import React from "react";
function Navbar() {
  return (
    <>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <a href="./" className="home">
              <span className="nav_logo-name">Home</span>
            </a>
            <div className="nav_list">
              <a href="./Cheesecake" className="nav_link">
                <span className="nav_name">Cheesecake</span>
              </a>
              <a href="./Bananabread" className="nav_link">
                <span className="nav_name">Banana Bread</span>
              </a>
              <a href="./Pancakes" className="nav_link">
                <span className="nav_name">Pancakes</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;