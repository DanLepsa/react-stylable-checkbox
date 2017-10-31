# react-stylable-checkbox
> Stylable checkbox component [![Build Status](https://travis-ci.org/DanLepsa/react-stylable-checkbox.svg?branch=master)](https://travis-ci.org/DanLepsa/react-stylable-checkbox)

## Installation
```sh
npm install react-stylable-checkbox
```
## Usage
```javascript
import CustomCheckbox from 'react-stylable-checkbox';

<CustomCheckbox
  checked={true}
  sign={"check_black"}
  color={"red"}
  onChange={(isChecked)=>{console.log(isChecked)}}
  />
```


## Options
- **checked** (boolean) - state of the checkbox, true by default
- **sign** (string) - the sign (choose between "check_white", "check_black", "x_white", "x_black")
- **color** (string) - the background color of the checkbox
- **onClick** (function)
- **size** (string) - the size of the checkbox in px
- **isHollow** (boolean) - the look of the checkbox when unchecked ( isHallow={false} by default)
- **disabled** (boolean, default: false) - disabled state for the checkbox; once disabled the onClick callback does not fire anymore

### Licence
The code is open-source and available under the MIT Licence.
