// const axios = require('axios');
import * as d3 from "d3";
import axios from 'axios';
// import barChart from './charts';
// const barChart = require('./charts');
// console.log(barChart);

// document.getElementById("form").onsubmit = function(){



const barChart = () => {
  var data = [100];
  if (window.postsData) {
    // debugger;
    for(let i= 0; i<window.postsData.data.statuses.length; i++){
      data.push(window.postsData.data.statuses[i].text.length)
    }
  }
  var height = 500;
  var width = 500;
  var barWidth = 35;
  var barOffset = 5;
  var myChart= d3.select(`#chart`).append(`svg`)
    .attr('width', width)
    .attr('height', height)
    .attr('background', '#f4f4f4')
    .selectAll(`rect`)
      .data(data)
      .enter().append(`rect`)
        .style('fill', 'lightgreen')
        .attr('width', barWidth)
        .attr('height', function(d){
          return d;
        })
        .attr('x', function(d, i){
          return i * (barWidth + barOffset);
        })
        .attr('y',function(d){
          return height - d;
        })
};

document.addEventListener('DOMContentLoaded', () => {
  window.postsData = {};
  const test = (query) => {
    axios.get(`/search?match_params=${query}`)
    .then((response) => {
      window.postsData = response;
      barChart();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  window.test = test;
  window.test2 = 5;
  test("foodie");
});

  // $(".submit").click(() => test($(".formInput").val()));

// const test = () => {
//   let query = "#foodie";
//   // debugger;
//   axios.get(`/search?match_params=trump`)
//   .then((response) => {
//     // debugger;
//     window.postsData = response;
//     barChart();
//     // debugger;
//     console.log(response);
//     // debugger
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// };

//which one would work??? how to make jquery work
//
document.addEventListener('submit', (e) => {
  // e.preventDefault();
  // $(".submit").click(() => {
  let searchQuery = "";
  searchQuery = document.getElementById("formInput").value;
  window.postsData = {};
  // debugger;
// barChart();
  // console.log("here")
  // debugger;
  test(searchQuery);
  // debugger
  window.test = test;
  window.test2 = 5;
});
// });
//
//













//
