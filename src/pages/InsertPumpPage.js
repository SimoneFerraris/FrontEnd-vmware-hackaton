import {InstructionsContainer} from '../fragments/Containers';
import plug from '../images/plug.png'

function InsertPumpPage() {
  function descText() {
    return (
        <div>Car detected, <br/><strong>Plug In</strong> the pump!</div>
    )
  }
  const objInfo = {img: plug, imgAlt: 'plug', desc: descText}
  return (
    <div>
        <InstructionsContainer {...objInfo}/>
    </div>
  );
}

export default InsertPumpPage;
/*
*/