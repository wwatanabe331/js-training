import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return []; // ここを作りましょう！
  const bins = [];
  for(let i = 0; i < input.length; i++){
    const item = input[i];
    const data = {
      color: item.gender ==="男性" ? "blue" : "red",
      gender: item.gender,
      bmi: item.x / ((item.y/100)**2),
      weight: item.x,
      height: item.y,
    };
   
    bins.push(data);
  }
  return bins;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
