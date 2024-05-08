import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return []; // ここを作りましょう！
  for(const item of input) {
    // 日付をUTCとして解釈
    const d = new Date(`${item.createAt} UTC`);
    //getFullYear()は年（４桁）の値を取得する
    const year = d.getFullYear();
    // 月（2桁に変換）
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const date = `${d.getDate()}`.padStart(2, "0");
    item.createdAt = `${year} - ${month} - ${date}`;
  }

  const dates = Array.from(new Set(input.map(({createdAt}) => createdAt)));
  dates.sort();
  const count = {tweet : {}, retweet: {}};
  for(const d of dates) {
    count.tweet[d] = 0;
    count.retweet[d] = 0;
  }
  for(const {createdAt, isRetweet} of input) {
    if(isRetweet) {
      count.retweet[createdAt] += 1;
    } else {
      count.tweet[createdAt] += 1;
    }
  }
  return ["tweet", "retweet"].map((key) => {
    return {
      id: key,
      data: dates.map((d) => {
        return {
          x: d,
          y: count[key][d],
        };
      }),
    };
  });
};

{/* const bins = [];
  for(let i = 0; i<input.length; i++){
    const item = input[i];
    const result = {
      id : item.isRetweet === true ? "tweet" : "retweet",
      data: input
      .filter((item) => item.id === id)
      .map(({createdAt: x, y}) => ({x, y})),

      data: input
        .filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  };
  bins.push(result);
  return bins; */}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer07"
      convertData={convertData}
      dataUrl="data/covid19-tweets.json"
      instruction={instruction}
      title="Lesson 07"
      Chart={Chart}
    />
  );
};

export default Lesson;
