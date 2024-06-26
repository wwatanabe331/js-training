import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return []; // ここを作りましょう！
  const genders = Array.from(new Set(input.map(({ gender }) => gender)));
  //Math.minは引数yが
  const min = Math.round(Math.min(...input.map(({ y }) => y)));
  const max = Math.round(Math.max(...input.map(({ y }) => y)));
  const bins = Array.from({ length: max - min + 1 }).map((_, i) => {
    const obj = {
      bin: (min + i).toString(),
    };
    for (const gender of genders) {
      obj[gender] = 0;
    }
    return obj;
  });
  for (const { y, gender } of input) {
    const i = Math.round(y) - min;
    bins[i][gender] += 1;
  }
  return bins;
};

  {/*const bins = {};
  for(let i = 0; i < input.length; i++){
    const item = input[i];
    const height = Math.round(item.y);
    if (!bins[height]) {
      bins[height] = { bin: height, 男性: 0, 女性: 0};
    }

    if(item.gender === "男性") {
      bins[height]["男性"]++;
    } else if(item.gender ==="女性") {
      bins[height]["女性"]++;
    }
  }
  return Object.values(bins);*/}


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
