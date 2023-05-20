/* import { useState, useEffect } from "react";
 */
function DisplayProjectIcon(props) {
  /*   let [icon, setIcon] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      let logo_url = `${props.project_logo}`;
      let importedIcon = await import(`${logo_url}`);

      setIcon(importedIcon.default);
    }
    fetchData();
  }, [props.project_logo]); */

  /*   let img = <img alt={props.project_name + `_icon`} src={icon} />;
   */
  let icon = `${props.project_logo}`;
  return <img alt="icon" src={require(icon)?.default} />;
}
export default DisplayProjectIcon;
