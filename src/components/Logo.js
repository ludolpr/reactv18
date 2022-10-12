import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accésibles dans "public"" """ */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React Monde</h3>
    </div>
  );
};

export default Logo;
