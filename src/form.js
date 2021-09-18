import './form.css';
import React,{ Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { validEmail,validName } from './regex'; 
library.add(faChevronDown);
class Form extends Component{
constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      password: '',
      email : '', 
      name : '',
      showList : false,
      typeValue :'I would describe my user type as',
      isEnteredName : false,
      isEnteredEmail : false,
      isEnteredPassword : false,
      isErrorEmail : false,
      isErrorName : false,
      isEnable : 'Fields Btn',
      isErrorPassword : false
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.CheckBtn = this.CheckBtn.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.fillType = this.fillType.bind(this);
    this.nameBlur = this.nameBlur.bind(this);
    this.nameFocus = this.nameFocus.bind(this);
    this.emailBlur = this.emailBlur.bind(this);
    this.emailFocus = this.emailFocus.bind(this);
     this.passBlur = this.passBlur.bind(this);
    this.passFocus = this.passFocus.bind(this);
   
}
handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  toggleShow (){
      if(this.state.password.length>0){
    this.setState({ hidden: !this.state.hidden });}
} toggleList (){
    this.setState({ showList: !this.state.showList });
}
fillType(e){
    this.setState({ typeValue:  e.currentTarget.getAttribute('data') });
    this.setState({ showList: !this.state.showList });

    this.CheckBtn();
}
nameFocus(){
  this.setState({ isEnteredName: true });
}nameBlur(e){
if(e.target.value.length <=0)
{
  this.setState({ isErrorName: false });
  this.setState({ isEnteredName: false });
  this.CheckBtn();
}
else{
  this.writeName(e);
  this.CheckBtn();
  }
}
passFocus(){
  this.setState({ isEnteredPassword: true });
}passBlur(e){
if(e.target.value.length <=0)
{
  this.setState({ isErrorPassword: false });
  this.setState({ isEnteredPassword: false });
  this.CheckBtn();
}
else{
  this.writePassword(e);
  this.CheckBtn();
  }
}
emailFocus(){
  this.setState({ isEnteredEmail: true });

}emailBlur(e){
if(e.target.value.length <=0)
{
  this.setState({ isErrorEmail: false });
  this.setState({ isEnteredEmail: false });
  this.CheckBtn();
}
else{
this.writeEmail(e);this.CheckBtn();
}
}
writeEmail(e){
  if (!validEmail.test(e.target.value)) {
    this.setState({ isErrorEmail: true });
  }
  else{
    this.setState({ isErrorEmail: false });
  }
  
}
CheckBtn(){
 
  if(!this.state.isErrorPassword && !this.state.isErrorEmail && !this.state.isErrorName 
    && this.state.name.length>0 && this.state.email.length>0
    &&  this.state.typeValue !=='I would describe my user type as' && this.state.password.length>8){
      this.setState({isEnable:'Fields EnableBtn'}) ;
  }
  else  this.setState({isEnable:'Fields Btn'}) ;
}
writeName(e){
  if (!validName.test(e.target.value)) {
    this.setState({ isErrorName: true });
  }
  else{
    this.setState({ isErrorName: false });
  }}
  writePassword(e){
    if (e.target.value.length<8) {
      this.setState({ isErrorPassword: true });
    }
    else{
      this.setState({ isErrorPassword: false });
    }}
render()
 {
   var changedLblName = this.state.isEnteredName ? "UpLbl" : "MiddleLbl";
   var changedLblEmail = this.state.isEnteredEmail ? "UpLbl" : "MiddleLbl";
   var changedLblPassword = this.state.isEnteredPassword ? "UpLbl" : "MiddleLbl";

var showNameError ,redBorderName='';
var showPasswordError, redBorderPassword = '';
var showEmailError ,redBorderEmail='';
if(this.state.isErrorName)
{
  showNameError  = "show ErrorMsg";
  redBorderName = "redBorder Fields";
  changedLblName = changedLblName.concat(" red");
  }
  else{
  showNameError  = "hide";
  redBorderName = "whiteBorder Fields";
  changedLblName = changedLblName.concat(" white");
  }
if(this.state.isErrorEmail)
{
  showEmailError  = "show ErrorMsg";
  redBorderEmail = "redBorder Fields";
  changedLblEmail = changedLblEmail.concat(" red");
  }
  else{
  showEmailError  = "hide";
  redBorderEmail = "whiteBorder Fields";
  changedLblEmail = changedLblEmail.concat(" white");
  }
if(this.state.isErrorPassword)
{
showPasswordError  = "show ErrorMsg";
redBorderPassword = "redBorder Fields";
changedLblPassword = changedLblPassword.concat(" red");
}
else{
showPasswordError  = "hide";
redBorderPassword = "whiteBorder Fields";
changedLblPassword = changedLblPassword.concat(" white");
}

    return (
        <div id="FormContainer">
   <form>
    <h2>Let's set up your account</h2>
    <br/>
    <label id="AlreadyLbl">Already have an account? <label id="SigninLbl">Signin</label></label>
    <br/> <br/> <br/>
    <label  onClick={this.nameFocus} className={changedLblName}>Your Name</label><input  ref={this.nameInput} onChange={this.handleNameChange} onFocus={this.nameFocus} onBlur={this.nameBlur} type="text" className={redBorderName}  />
    <br/>
    <label className={showNameError}>Please Enter a valid name</label>
     <br/>
    <label onClick={this.emailFocus} className={changedLblEmail}>Email Address</label><input  ref={this.emailInput} onFocus={this.emailFocus} onBlur={this.emailBlur} onChange={this.handleEmailChange}  type="email"  className={redBorderEmail}  />
    <br/>
    <label className={showEmailError}>Please Enter a valid email</label>
    <br/>
    <input type="text" disabled class="Fields" ref={this.typeInput}   placeholder={this.state.typeValue} /> <FontAwesomeIcon className="Icons2"  onClick={this.toggleList} icon="chevron-down" />
    <br/>
    <ul id="UserType" style={{ display: this.state.showList === true? 'block': 'none'}}>
        <li data="Developer" onClick={this.fillType}>Developer</li>
        <li data="Engineer" onClick={this.fillType}>Engineer</li>
        <li data="Manager" onClick={this.fillType}>Manager</li>
    </ul>
    <br/>
    <label onClick={this.passFocus} className={changedLblPassword}>Password</label><input  ref={this.passwordInput} onFocus={this.passFocus} onBlur={this.passBlur}  type={this.state.hidden ? 'password' : 'text'} onChange={this.handlePasswordChange} className={redBorderPassword} value={this.state.password}  /><Icon.EyeFill onClick={this.toggleShow} className="Icons" size={12}/>
    <br/>
    <label id="PasswordLbl">Minimum 8 characters</label>
   
    <br/>
    <label className={showPasswordError}>Please Enter a valid password</label>
    <br/>
    <input type="button" className={this.state.isEnable}  value="Next" />
    <br/><br/>
    <label id="BellowLbl">
        By clicking the "Next" button, you agree to creating a free account, and to <bold id="SigninLbl">Terms of Service</bold> and <bold id="SigninLbl">Private Policy</bold>
    </label>

    </form>
    </div>
    );
  }
}
  export default Form;