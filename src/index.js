import React, {Component, PropTypes} from 'react';
import validWebColor from 'valid-web-color';

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.onToggleClick = this.onToggleClick.bind(this);
    this.getSelectedSign = this.getSelectedSign.bind(this);
    this.validSize = this.validSize.bind(this);
  }

  onToggleClick(){
    let toggleCheck = !this.state.checked;
    this.setState({checked:toggleCheck});
    this.props.onChange ? this.props.onChange(toggleCheck) : "";
  }

  componentDidMount(){
    this.props.checked ? this.setState({checked:this.props.checked}) : "";
  }

  getSelectedSign(sign){
    ['check_white','check_black','x_white','x_black'].indexOf(sign) != -1 ? "" : sign='check_white';
    return sign;
  }

  validSize(sizeString){
    if (!sizeString || sizeString.length < 1) return false;
    if ( sizeString.indexOf('px') != -1 ) {
      sizeString = sizeString.slice(0,-2);
    }
    if ( !isNaN(parseInt(sizeString))){
      return parseInt(sizeString);
    }
    return false;
  }

  render(){
    let selectedColor = validWebColor(this.props.color) ? this.props.color : null;
    let selectedSize = this.validSize(this.props.size) ? this.validSize(this.props.size) : null;
    let selectedSign = this.getSelectedSign(this.props.sign);
    let imageSrc = require('./'+selectedSign+'.png');
    const css = {
      imageBody:{
        width:'70%',
        height:'70%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position:'absolute',
        margin:'15%'
      },
      checkboxBody:{
        cursor: this.props.disabled ? 'default' : 'pointer',
        position:'relative',
        width: selectedSize ? selectedSize+'px' : '20px',
        height:selectedSize ? selectedSize+'px' : '20px',
        background: selectedColor ? selectedColor : 'cornflowerblue',
        borderRadius: selectedSize ? selectedSize/4+'px' : '5px',
        display:'inline-block',
        margin: '0px 2px'
      },
      checkboxBodyDef:{
        boxSizing: 'border-box',
        cursor: this.props.disabled ? 'default' : 'pointer',
        position:'relative',
        width: selectedSize ? selectedSize+'px' : '20px',
        height:selectedSize ? selectedSize+'px' : '20px',
        border: selectedColor ? '3px solid '+selectedColor : '3px solid '+'cornflowerblue',
        background: '#fff',
        borderRadius: selectedSize ? selectedSize/4+'px' : '5px',
        display:'inline-block',
        margin: '0px 2px'
      },
      disabledOverlay: {
        width:'100%',
        height:'100%',
        background: `repeating-linear-gradient(
                      45deg,
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.2) 5px,
                      rgba(0, 0, 0, 0.3) 5px,
                      rgba(0, 0, 0, 0.3) 10px`,
        opacity:'0.5',
        borderRadius: selectedSize ? selectedSize/4+'px' : '5px',
        position:'absolute',
        top:'0',
        right:'0'
      }
    };

    let props = this.props;

    return(
      <div style={this.state.checked ? css.checkboxBody : this.props.isHollow ? css.checkboxBodyDef : css.checkboxBody} onClick={this.props.disabled ? "" : this.onToggleClick}>
        <div style={css.imageBody}>
          {this.state.checked ?
            <img style={{width:'100%',height:'100%'}} src={imageSrc} />
            :
            ""
          }
        </div>
        {this.props.disabled ? <div style={css.disabledOverlay}></div> : ""}
      </div>
    )
  }
}

CustomCheckbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    isHollow: PropTypes.bool,
    sign: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    onChange: PropTypes.func
}

export default CustomCheckbox;
