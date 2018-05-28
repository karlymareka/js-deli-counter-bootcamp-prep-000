function takeANumber(katzDeliLine, nextPerson) {
  katzDeliLine.push(nextPerson);
  return (`Welcome, ${nextPerson}. You are number ${katzDeliLine.length + 1} in line.`);
}