function Box({ row, col }) {
    return (
      <div
        className="block"
        style={
          col % 2 === 0
            ? row % 2 === 0
              ? { background: "black" }
              : { background: "white" }
            : row % 2 === 0
            ? { background: "white" }
            : { background: "black" }
        }
      ></div>
    );
  }
  
  function Boxes({ item }) {
    return (
      <div className="row">
        <Box row={1} col={item} />
        <Box row={2} col={item} />
        <Box row={3} col={item} />
        <Box row={4} col={item} />
        <Box row={5} col={item} />
        <Box row={6} col={item} />
        <Box row={7} col={item} />
        <Box row={8} col={item} />
      </div>
    );
  }
  
  export default function BoxRow() {
    const counts = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="board">
        {counts.map((item, index) => {
          return <Boxes key={index} item={item} />;
        })}
      </div>
    );
  }