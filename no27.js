function countGrade(scores) {
  const result = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };

  scores.forEach(score => {
    if (score === 100) {
      result.S++;
    } else if (score < 100 && score >= 90) {
      result.A++;
    } else if (score < 90 && score >= 80) {
      result.B++;
    } else if (score < 80 && score >= 60) {
      result.C++;
    } else if (score < 60 && score >= 0) {
      result.D++;
    } else if (score === -1) {
      result.X++;
    }
  });

  return result;
}

// Examples
console.log(countGrade([50,60,70,80,90,100]));              // Output: {S:1, A:1, B:1, C:2, D:1, X:0}
console.log(countGrade([65,75,85,85,95,100,100]));          // Output: {S:2, A:1, B:2, C:2, D:0, X:0}
console.log(countGrade([-1,-1,-1,-1,-1,-1]));                // Output: {S:0, A:0, B:0, C:0, D:0, X:6}
