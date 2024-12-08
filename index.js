// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(season => season.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
