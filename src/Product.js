import React from "react";
import PropTypes from "prop-types";

import { cutString } from "./Utility";

const Product = ({title,image_url}) => (
	<div className="card">
	    <div className="card_image">
	      <img width="150px" height="200px" src={image_url}/>
	    </div>
	    <div className="card_name view_center">
	      <span>{cutString(title,20)}</span>
	    </div>
  	</div>
);

Product.defaultProps = {
    title:"Naruto",
    image_url:"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
};

Product.propTypes = {
    title:PropTypes.string,
    image_url:PropTypes.string,
};

export default Product;