import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return []; // ここを作りましょう！
  const species = Array.from(new Set(input.map(({species}) =>species)));
  return species.map((species) => {
    return {
      id: species,
      data: input
      .filter((item) => item.species === species)
      .map(({spalLength: x, petalWidth: y}) => ({x, y})),
    };
  });

  //return input.map(item => ({
  //   id: item.species,
  //    data: [
  //      {x: item.sepalLength, y: item.petalWidth}
  //    ]
  //}));

  //const iris = [
  //  {
  //    id: input.species,
  //    data: [
  //      {x: input.sepalLength, y: input.petalWidth}
  //    ]
  //  }
  //];
  //return iris;
};
const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
