export const convertToArray = function() {
  let tblArray = [];

  $("table#maze tr").each(function() {
      let rowArray = [];
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            rowArray.push($(this));
          });

          tblArray.push(rowArray);
      }
  });

  return tblArray;
};

export const startPos = function() {
  let tblArray = convertToArray();

  for (let row = 0; row < tblArray.length; row++) {
    for (let col = 0; col < tblArray[0].length; col++) {
      if (tblArray[row][col].attr('id') === 'start') {
        return [row, col];
      }
    }
  }
};

export const endPos = function() {
  let tblArray = convertToArray();

  for (let row = 0; row < tblArray.length; row++) {
    for (let col = 0; col < tblArray[0].length; col++) {
      if (tblArray[row][col].attr('id') === 'end') {
        return [row, col];
      }
    }
  }
};

export const upPos = function(pos) {
  return [pos[0] - 1, pos[1]];
};

export const rightPos = function(pos) {
  return [pos[0], pos[1] + 1];
};

export const downPos = function(pos) {
  return [pos[0] + 1, pos[1]];
};

export const leftPos = function(pos) {
  return [pos[0], pos[1] - 1];
};

export const occupiable = function(i, el) {
  if (i === 0 && el.hasClass('s')) {
    return true;
  }
  else if (i === 1 && el.hasClass('w'))
    return true;
  else if (i === 2 && el.hasClass('n')) {
    return true;
  }
  else if (i === 3 && el.hasClass('e')) {
    return true;
  }

  return false;
};

export const arraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i])
          return false;
  }

  return true;
};

export const includedIn = function(childArr, parentArr) {
  for (let i = 0; i < parentArr.length; i++) {
    if (arraysEqual(childArr, parentArr[i])) {
      return true;
    }
  }

  return false;
};
