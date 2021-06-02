import {useState} from "react"
import styled from "styled-components";
import Card from "./components/card";
import Timeline from "./components/TimeLine";

import data from "./components/data";

const AppStyled = styled.div`
  max-width: 1200px;
  margin: auto;
  .title {
    text-align: center;
    margin: 0;
  }
  .list-card {
    display: flex;
    flex-wrap: wrap;
    .card {
      width: 12rem;
      height: 12rem;
      margin: 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;

function App() {
  const [currentChoose, setCurrentChoose] = useState([]);
  const [listDone, setListDone] = useState([]);
  

  const handlOnClickCard = (current) => {
    const checkDone = listDone.findIndex((doneItem) => doneItem === current.id);
    if (checkDone !== -1) {
      return;
    }
    const checkCurrent = currentChoose.findIndex(
      (item) => item.id === current.id
    );
    if (checkCurrent !== -1) {
      return;
    }
    setCurrentChoose((prev) => [...prev, current]);
    if (currentChoose.length === 1) {
      if (currentChoose[0].code === current.code) {
        setTimeout(() => {
          setListDone((prev) => [...prev, current.id, currentChoose[0].id]);
        }, 1000);
      }
      setTimeout(() => {
        setCurrentChoose([]);
      }, 1000);
    }
  
  };
  
  console.log(listDone);
  return (
    <AppStyled>
      <h1 className="title">Game Lat Mat</h1>
      <Timeline />
      <div className="list-card">
        {data.map((item) => (
          <div key={item.id} className="card">
            <Card
              image={item.image}
              handlOnClickCard={() => handlOnClickCard(item)}
              currentChoose={
                currentChoose[0]?.id === item.id ||
                currentChoose[1]?.id === item.id
                  ? true
                  : false
              }
              isDone={
                listDone.findIndex((doneItem) => doneItem === item.id) === -1
                  ? false
                  : true
              }
            />
          </div>
        ))}
      </div>
    </AppStyled>
  );
}

export default App;