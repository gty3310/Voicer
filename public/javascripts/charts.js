// import * as d3 from "d3";
// const barChart = function(){
//   var data = [100];
//   if (window.postsData) {
//     // debugger;
//     for(i= 0; i<window.postsData.data.statuses.length; i++){
//       data.push(window.postsData.data.statuses[i].text.length)
//     }
//   }
//   var height = 500;
//   var width = 500;
//   var barWidth = 35;
//   var barOffset = 5;
//   var myChart= d3.select(`#chart`).append(`svg`)
//     .attr('width', width)
//     .attr('height', height)
//     .attr('background', '#f4f4f4')
//     .selectAll(`rect`)
//       .data(data)
//       .enter().append(`rect`)
//         .style('fill', 'lightgreen')
//         .attr('width', barWidth)
//         .attr('height', function(d){
//           return d;
//         })
//         .attr('x', function(d, i){
//           return i * (barWidth + barOffset);
//         })
//         .attr('y',function(d){
//           return height - d;
//         })
// }
// //node.js
// module.exports = barChart;
