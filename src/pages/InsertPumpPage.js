import {InstructionsContainer} from '../fragments/Containers';
import plug from '../images/plug.png'

function InsertPumpPage() {
  const objInfo = {img: plug, imgAlt: 'plug', desc: 'Car detected, Plug In the pump!'}
  return (
    <div>
        <InstructionsContainer {...objInfo}/>
    </div>
  );
}

export default InsertPumpPage;
