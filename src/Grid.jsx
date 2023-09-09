// import { range } from './utils';

// function Grid({ numRows, numCols }) {
//   return <div className="grid">{/* TODO */}</div>;
// }

// export default Grid;

import React from 'react';
import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(1, numRows).map((rowNum) => (
        <div className="row" key={rowNum}>
          {range(1, numCols).map((colNum) => (
            <div className="cell" key={colNum}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
