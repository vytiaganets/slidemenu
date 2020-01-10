import React, {Component} from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    console.log("Rendering: Menu");
    var visibility = "hide";
    
    if(this.props.menuVisibility){
      visibility = "snow";
  }

  return(
    <div id="flyoutMenu"
    onMouseDown={this.props.handleMouseDown}
    className={visibility}>
    <h2><a href="#">Головна</a></h2>
    <h2><a href="#">Про нас</a></h2>
    <h2><a href="#">Контакти</a></h2>
    <h2><a href="#">Пошук</a></h2>
    </div>
  );
  }
}

export default Menu;