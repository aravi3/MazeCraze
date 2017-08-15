import { makeMaze, solve } from './scripts/generate_new_maze';
import { startPos, endPos, convertToArray } from './scripts/modules';
import breadthFirstSolve from './scripts/breadth_first';
import depthFirstSolve from './scripts/depth_first';
import aStarSolve from './scripts/a_star';

$(() => {
  $('#rows').val('20');
  $('#cols').val('20');

  $('.modal-button').on('click', (e) => {
    e.preventDefault();
    $('#splash').css('visibility', 'hidden');
    $('#overlay').css('overflow-y', 'scroll');
  });

  $('.instructions-link').on('click', (e) => {
    e.preventDefault();
    $('#splash').css('visibility', 'visible');
    $('#overlay').css('overflow-y', 'hidden');
  });

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

  $('#breadth').on('click', (e) => {
    e.preventDefault();

    $('#astar').css('text-decoration', 'none');
    $('#depth').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'underline');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    if (($('#start').length + $('#end').length) === 2) {
      breadthFirstSolve();
    }
    else if (($('#start').length + $('#end').length) === 1) {
      alert("Must select endpoint");
    }
    else {
      let tblArray = convertToArray();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      breadthFirstSolve();
    }
  });

  $('#astar').on('click', (e) => {
    e.preventDefault();

    $('#depth').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'none');
    $('#astar').css('text-decoration', 'underline');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    if (($('#start').length + $('#end').length) === 2) {
      aStarSolve();
    }
    else if (($('#start').length + $('#end').length) === 1) {
      alert("Must select endpoint");
    }
    else {
      let tblArray = convertToArray();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      aStarSolve();
    }
  });

  $('#depth').on('click', (e) => {
    e.preventDefault();

    $('#astar').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'none');
    $('#depth').css('text-decoration', 'underline');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    if (($('#start').length + $('#end').length) === 2) {
      depthFirstSolve();
    }
    else if (($('#start').length + $('#end').length) === 1) {
      alert("Must select endpoint");
    }
    else {
      let tblArray = convertToArray();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      depthFirstSolve();
    }
  });

  $('#clear').on('click', (e) => {
    e.preventDefault();

    $('#astar').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'none');
    $('#depth').css('text-decoration', 'none');

    $('#start').removeAttr('id');
    $('#end').removeAttr('id');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    $('.time-value').text("");
    $('.visited-value').text("");
    $('.efficiency-value').text("");
  });

  $('#generate').trigger('click');
});
