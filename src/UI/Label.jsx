const Label = ({icon,text}) => {
  console.log(icon);
  return (
    <label className="input-icon">
      {icon} &nbsp; {text} <b>*</b>
    </label>
  );
};

export default Label;
