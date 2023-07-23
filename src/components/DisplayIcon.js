import Youtube_icon from "../svgs/icon_youtube.svg";

function DisplayIcon(props) {
  const Icons = {
    Youtube: Youtube_icon,
  };
  const Icon = Icons[props.icon];

  return <img alt="icon" src={Icon} />;
}
export default DisplayIcon;
