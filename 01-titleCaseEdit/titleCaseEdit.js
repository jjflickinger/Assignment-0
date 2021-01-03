function titleCaseEdit(title) {
    if (title.length == 0) {
    return title;
  } else if (title.length == 1 && title.charAt(0) ==
         title.charAt(0).toUpperCase()) {
    return title;
  } else {
    let arr = title.split('');
    arr[0] = arr[0].toUpperCase();
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] == ' ') {
        arr[i] = arr[i].toUpperCase();
      }
    }
    return arr.join('');
  }
}

// Do not edit this line;
module.exports = titleCaseEdit;
