# react-stylable-checkbox
> Stylable checkbox component [![Build Status](https://travis-ci.org/DanLepsa/react-stylable-checkbox.svg?branch=master)](https://travis-ci.org/DanLepsa/react-stylable-checkbox)

## Installation
  ``
  npm install react-stylable-checkbox
  ``
## Usage

const CustomCheckbox = require('react-stylable-checkbox');

<CustomCheckbox
  checked={true}
  sign={"check_black"}
  color={"red"}
  onChange={(isChecked)=>{console.log(isChecked)}}
  />
