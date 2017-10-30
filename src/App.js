import React from 'react';
import CustomCheckbox from './CustomCheckbox';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <CustomCheckbox
          checked={true}
          sign={"check_black"}
          color={""}
          onChange={(isChecked)=>{console.log(isChecked)}}
          />
        <CustomCheckbox
          checked={true}
          sign={"x_black"}
          isHollow={true}
          color={"#ff5722"}
          size={"40px"}
          />
        <CustomCheckbox
          size={"60px"}
          isHollow={true}
          checked={true}
          color={"#4bfcf9"}
          />
        <CustomCheckbox
          disabled={true}
          checked={true}
          size={"100"}
          sign={"x_white"}
          color={"#c8fc4b"}
          />
      </div>
    )
  }
}
