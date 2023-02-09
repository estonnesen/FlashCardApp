// import { setText } from "../reducers/textReducer";
import { useSelector, useDispatch } from "react-redux";
import { setTextToggle } from "../reducers/textReducer";

// const flashCard = {
//   question: "can we code?",
//   answer: "sorta"
// }

const Card = (props) => {
  const { question, answer } = props;

  const dispatch = useDispatch();
  const textToggle = useSelector((state) => state.textToggle.value);
  // console.log(props);

  return (
    <>
      <div onClick={() => dispatch(setTextToggle())} className="cardContainer">
        {textToggle === false && (
          <div>
            <p>{question}</p>
          </div>
        )}
        {textToggle === true && (
          <div>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
