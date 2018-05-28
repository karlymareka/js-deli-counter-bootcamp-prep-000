function takeANumber(katzDeliLine, nextPerson) {
  katzDeliLine.push(nextPerson);
  return (`Welcome, ${nextPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${firstPerson}.`);
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return ("The line is currently empty.");
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var 
    }  
  }
}