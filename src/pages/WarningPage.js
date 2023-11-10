import {InstructionsContainer} from '../fragments/Containers';
import warning from '../images/warning.svg'

function InsertPumpPage() {
function descText() {
    return (
        <div>Please <br/><strong>Remove</strong> Your car.</div>
    )
    }
  const objInfo = {img: warning, imgAlt: 'warning', desc: descText}
  return (
    <div>
        <InstructionsContainer {...objInfo}/>
    </div>
  );
}

export default InsertPumpPage;
