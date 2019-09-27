
function reduceData(arr) {
  let low = 0;
	let moderateToHigh = 0;
	
  arr.forEach(obj => {
    if (obj.risk_level === "Low") {
      low++;
    } else if (obj.risk_level === "Moderate to High") {
      moderateToHigh++;
    }
  });
  return [low, moderateToHigh];
}

export default reduceData;
