import React from "react";

const Logo = () => {
  return (
    <svg className="w-12 h-8 fill-secondary">
      <use xlinkHref="/sprite/sprite.svg#icon-logo"></use>
    </svg>
  );
};

export default Logo;
