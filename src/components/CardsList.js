import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';

const cards = [
  {
    question: "Can we code?",
    answer: "Sorta",
  },
  {
    question: "Is coding fun?",
    answer: "Sometimes!",
  },
  {
    question: "Am I sane?",
    answer: "Unsure",
  },
];

const CardsList = () => {
  return (
    <div className="container">
      {cards.map((card) => {
        return (
          <Card key={uuidv4()} question={card.question} answer={card.answer} />
        )
      })}
    </div>
  );
};

export default CardsList;
