import {InstructionsContainer} from '../fragments/Containers';
import telephone from '../images/telephone.svg'

function InsertPumpPage() {
  const objInfo = {img: telephone, imgAlt: 'telephone', desc: 'Need Help? Click here to call an assistant'}
  return (
    <div>
        <InstructionsContainer {...objInfo}/>
    </div>
  );
}

export default InsertPumpPage;
