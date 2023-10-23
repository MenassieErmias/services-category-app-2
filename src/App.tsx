import { useState, useEffect } from "react";

// COMPONENTS IMPORT
import Navbar from "./Components/Navbar/Navbar";
import Display from "./Components/Display/Display";
import Category from './Components/Category/Category';

function App() {
  // STATE
  const [nodeList, setNodeList] = useState<React.ReactElement[]>([]);
  const [rows, setRows] = useState<{ name: string, id: number, parentId: number, level: number }[][]>([]);

  const [servicesCount, setServicesCount] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(100);
  const [maxLevel, setMaxLevel] = useState<number>(0);
  const [maxId, setMaxId] = useState<number>(0);

  // FUNCTIONS
  const addNode = (name: string, parentId: number, level: number) => {
    const newNode = {
      id: maxId + 1,
      name: name,
      parentId: parentId,
      level: level
    }
    const newRows = [...rows];
    newRows[level].push(newNode);
    setRows(newRows);
  }

  // useEffect(() => {
  //   setRows([
  //     [
  //       {
  //         name: 'Menassie',
  //         id: 1,
  //         parentId: 0,
  //         level: 1
  //       },
  //       {
  //         name: 'Menassie',
  //         id: 2,
  //         parentId: 0,
  //         level: 1
  //       },
  //     ],
  //     [
  //       {
  //         name: 'Menassie',
  //         id: 1,
  //         parentId: 0,
  //         level: 1
  //       },
  //       {
  //         name: 'Menassie',
  //         id: 2,
  //         parentId: 0,
  //         level: 1
  //       },
  //     ]
  //   ])
  // }, [])

  return (
    <div className="App">
      <Navbar
        servicesCount={servicesCount}
        zoom={zoom}
      />
      <Display
        rows={rows}
        addNode={addNode}
      />
    </div>
  );
}

export default App;
