import {InstructionsContainer} from '../fragments/Containers';
import telephone from '../images/telephone.svg'

function InsertPumpPage() {
    function descText() {
        return (
            <div>Need Help? <br/><strong>Click here</strong> to call an assistant</div>
        )
      }
  const objInfo = {img: telephone, imgAlt: 'telephone', desc: descText}
  return (
    <div>
        <InstructionsContainer {...objInfo}/>
    </div>
  );
}

export default InsertPumpPage;
