const randomInteger = function (min, max) {
  if (min < 0) {
    return 'Please set positive min value or 0';
  }

  if (max > min) {
    return Math.round(Math.random() * (max - min +1) + min);
  } else {
    return 'Please set max value grater than min';
  }

  
}

const stringLengthCheck = function (comment, maxlength) {
  if (comment.length > maxlength) {
    return 'Maximum comment length exceeded'
  } else {
    return comment;
  }
}


