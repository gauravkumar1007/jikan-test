import React from "react";

const Header = ({onSubmit,btnLabel}) => (<header className="header sticky view_center">
    <div className="search view_center">
      <input id="search_query" type="text" name="query" placeholder="search for an anime, e.g Naruto"/>
      <button onClick={onSubmit}>{btnLabel}</button>
    </div>
  </header>
)

export default Header;