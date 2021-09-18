import './Signup.css';
import Form from './form';
import * as Icon from 'react-bootstrap-icons';
function Signup() {
    return (
      <div id="MainDiv">
          <div id="LeftDiv">
              <div id="Step">
<div id="StepContainer">
 <span>Step 1 of 3</span>
  <Icon.Dot size={15}  class="Dots Black"/>
  <Icon.Dot size={15} class="Dots"/>
  <Icon.Dot size={15} class="Dots"/>
</div>
              </div>
<Form />
          </div>
          <div id="RightDiv">
            <div id="TextContainer">
           <h2 >Dummy Heading</h2>
           <br/>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscinig elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
</p>
</div>
          </div>
      </div>
    );
  }
  
  export default Signup;
  