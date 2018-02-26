var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var position = katzDeli.length;
  return "Welcome, " + name + ". " + "You are number " + position + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = deliLine.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  for (i = 0; i < 0; i++)
    if (line.length === 0) {
      return "The line is currently empty.";
  }   else {
      return "The line is currently: 1. " + line[0]
  }
}