import {InstructionsContainer} from '../fragments/Containers';
import warning from '../images/warning.svg'

function InsertPumpPage() {
  const objInfo = {img: warning, imgAlt: 'warning', desc: 'Please Remove  Your Car.'}
  return (
    <div>
        <InstructionsContainer {...objInfo}/>
    </div>
  );
}

export default InsertPumpPage;
