import { makeMaze, solve } from './scripts/generate_new_maze';
import { startPos, endPos, convertToArray } from './scripts/modules';
import breadthFirstSolve from './scripts/breadth_first';

$(() => {
  $('#generate').on('click', (e) => {
    e.preventDefault();
    makeMaze($('#rows').val(), $('#cols').val());
  });

  $('#maze').on('click', (e) => {
    e.preventDefault();

    const $table = $(e.currentTarget);

    if ($table.find("td").is(e.target)) {
      if (($('#start').length + $('#end').length) === 2) {
      }
      else if ($('#start').length === 0) {
        $(e.target).attr('id', 'start');
      }
      else if (($('#start').length === 1) && ($('#end').length === 0)) {
        $(e.target).attr('id', 'end');
      }
    }
  });

  $('#solve').on('click', (e) => {
    e.preventDefault();

    if (($('#start').length + $('#end').length) === 2) {
      breadthFirstSolve();
    }
    else {
      let tblArray = convertToArray();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      breadthFirstSolve();
    }
  });

  $('#clear').on('click', (e) => {
    e.preventDefault();
    $('#start').removeAttr('id');
    $('#end').removeAttr('id');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('v');
          });
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   let canvas = document.getElementById('mycanvas');
//   canvas.height = 500;
//   canvas.width = 500;
//
//   let ctx = canvas.getContext('2d');
//   ctx.fillStyle = "red";
//   ctx.fillRect(100, 100, 600, 600);
// });
