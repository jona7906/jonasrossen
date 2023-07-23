import Momondo from "../svgs/icon_momondo.svg";
import Banking from "../svgs/icon_banking.svg";
import Aai_one from "../svgs/icon_aai_one.svg";
import Aai_two from "../svgs/icon_aai_two.svg";

function DisplayProjectIcon(props) {
  const Icons = {
    Momondo: Momondo,
    Banking: Banking,
    Aai_one: Aai_one,
    Aai_two: Aai_two,
  };
  const Icon = Icons[props.project_name];

  return <img alt="project icon" src={Icon} />;
}
export default DisplayProjectIcon;
