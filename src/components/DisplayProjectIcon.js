import Momondo from "../svgs/icon_momondo.svg";
import Banking from "../svgs/icon_banking.svg";
import Aai_one from "../svgs/icon_aai_one.svg";
import Aai_two from "../svgs/icon_aai_two.svg";
import Htmx_todo from "../svgs/icon_htmx_todo.svg";
import Server_dashboard from "../svgs/icon_server_dashboard.svg";

function DisplayProjectIcon(props) {
  const Icons = {
    Momondo: Momondo,
    Banking: Banking,
    Aai_one: Aai_one,
    Aai_two: Aai_two,
    Htmx_todo: Htmx_todo,
    Server_dashboard: Server_dashboard,
  };
  const Icon = Icons[props.project_name];

  return <img alt="project icon" src={Icon} />;
}
export default DisplayProjectIcon;
