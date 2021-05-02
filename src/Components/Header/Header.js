import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#2d466e",
        color: "white",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1
        onClick={() => window.scroll(0, 0)}
        className="text-center p-2 shadow"
      >
        Movie Max
      </h1>
    </div>
  );
};

export default Header;
