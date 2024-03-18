const Label = ({icon,text}) => {
  return (
    <label className="input-icon">
      {icon} &nbsp; {text} <b>*</b>
    </label>
  );
};

export default Label;
