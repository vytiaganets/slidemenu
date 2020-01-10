import React, {PureComponent} from "react";
import "./MenuButton.css";
// PureComponent автоматична перевірка змін властивості чи стану
class MenuButton extends PureComponent {
  /*//уникнення виклику методу render:
    shouldComponentUpdate(nextProps, nextState){
      if(nextProps.handleMouseDown === this.props.handleMouseDown) {
      return false;
    } else {
      return true; // викликається метод render
    }
  }
*/
  render() {
    console.log("Rendering: MenuButton");

    return(
      
      <button id="roundButton" 
      onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}

export default MenuButton;