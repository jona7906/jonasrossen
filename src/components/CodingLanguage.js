function CodingLanguage(props) {
  console.log(props.lan);
  return <div className={props.lan + "_wrapper"}></div>;
}

export default CodingLanguage;
