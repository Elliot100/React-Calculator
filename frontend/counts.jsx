import React from 'react';

const Counts = ({previousCounts}) => (
  <ul>
  {
    previousCounts.map(count => <li>{count}</li>)
  }
  </ul>
);

// convert to functional component since Counts don't keep track of state

// class Counts extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <ul>
//         {
//           this.props.previousCounts.map((count) => <li>{count}</li>)
//         }
//       </ul>
//     );
//   }
// }

export default Counts;