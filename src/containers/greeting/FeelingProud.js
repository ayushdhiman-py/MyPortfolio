import React from "react";
import portfolioPhoto from "../../assets/images/me.jpeg";
import "./FeelingProud.css";

function FeelingProud(props) {
  // const theme = props.theme;
  return <img src={portfolioPhoto} alt="portfolio-profile" style={{marginLeft:100, marginTop:10, height:300, borderRadius:100}}/>;
}

export default FeelingProud;
