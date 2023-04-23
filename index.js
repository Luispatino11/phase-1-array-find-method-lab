function superbowlWin(arr) {
  const winningYearObj = arr.find(obj => obj.result === "W");
  return winningYearObj ? winningYearObj.year : undefined;
}
