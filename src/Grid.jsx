// import { range } from './utils';

// function Grid({ numRows, numCols }) {
//   return <div className="grid">{/* TODO */}</div>;
// }

// export default Grid;

// import React from 'react';
// import { range } from './utils';

// function Grid({ numRows, numCols }) {
//   return (
//     <div className="grid">
//       {range(1, numRows).map((rowNum) => (
//         <div className="row" key={rowNum}>
//           {range(1, numCols).map((colNum) => (
//             <div className="cell" key={colNum}></div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Grid;

import React from 'react';

// Assuming you have a range function like this:
// function range(start, end) {
//   return Array.from({ length: end - start + 1 }, (_, i) => start + i);
// }

function Grid({ numRows, numCols }) {
  const rows = range(1, numRows).map((rowNum) => (
    <div className="row" key={`row-${rowNum}`}>
      {range(1, numCols).map((colNum) => (
        <div className="cell" key={`cell-${rowNum}-${colNum}`}></div>
      ))}
    </div>
  ));

  return <div className="grid">{rows}</div>;
}

export default Grid;

