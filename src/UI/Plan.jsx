
const Plan = ({imgSrc,headingText,text}) => {
  return (
    <div className="plan-container__boxes__box">
                <img src={imgSrc} alt="icon_img" id="plan__img" />
                <h3>{headingText}</h3>
                <p>
                  {text}
                </p>
              </div>
  )
}

export default Plan
