import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return []; // ここを作りましょう！
  return input.filter(({gender}) =>gender === "男性");
  //同じ：return input.filter(item => item.gender === "男性");
  //オブジェクトはプロパティの名前で取り出す({gender})

  //return user.id;
  // return input.filter((gender) =>{
  //   // const{gender} = item;
  //   return gender === "男性"
  // });
  
  
  //return input.map(([name, count]) =>({name, count}));
  {/*const convertedData = input.map((v) => ({ name: v.name, count: v.count}));
return convertedData*/}
  // const{gender} = item;

  //×const str = "男性";
  //return (input.gender == str);
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
