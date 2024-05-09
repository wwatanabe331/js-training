import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart10";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return { nodes: [], links: [] }; // ここを作りましょう！
  const degree = {};
  for (const { id } of input.nodes) {
    degree[id] = 0;
  }
  for (const { source, target } of input.links) {
    degree[source] += 1;
    degree[target] += 1;
  }

  const removedTags = new Set(
    input.nodes.map(({ id }) => id).filter((tag) => degree[tag] <= 1)
  );
  const nodes = input.nodes.filter(({ id }) => !removedTags.has(id));
  const links = input.links.filter(
    ({ source, target }) => !removedTags.has(source) && !removedTags.has(target)
  );

  const neighbors = {};
  for (const { id } of nodes) {
    neighbors[id] = [];
  }
  for (const { source, target } of links) {
    neighbors[source].push(target);
  }

  const visited = new Set();
  const queue = ["福島"];
  while (queue.length > 0) {
    const u = queue.shift();
    if (visited.has(u)) {
      continue;
    }
    visited.add(u);
    for (const v of neighbors[u]) {
      queue.push(v);
    }
  }

  const maxFrequency = Math.max(
    ...input.nodes.map(({ frequency }) => frequency)
  );
  for (const node of nodes) {
    node.radius = Math.sqrt(node.frequency / maxFrequency) * 20;
    node.color = visited.has(node.id) ? "red" : "blue";
  }

  return { nodes, links };
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer10"
      convertData={convertData}
      dataUrl="data/topic-graph.json"
      instruction={instruction}
      title="Lesson 10"
      Chart={Chart}
    />
  );
};

export default Lesson;
