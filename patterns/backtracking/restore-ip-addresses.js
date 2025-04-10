/**
 * https://leetcode.com/problems/restore-ip-addresses/submissions/1599734532
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  let ip = [];
  let input = s;

  function backtrack(remainingStr) {
		
    if(ip.length === 4){
			if (isValidIP(ip) && remainingStr === "") {
				result.push(ip.join("."));
			}
			return;
		}
    for (let i = 1; i <= 3 && (i <= remainingStr.length); i++) {
			const seg = remainingStr.substr(0,i);
      if (!isValidSegment(seg)) continue;
      ip.push(seg);
      backtrack(remainingStr.substr(i));
			ip.pop()
    }
  }

  backtrack(input);
  return result;
};

function isValidIP(i) {
  return i.length === 4;
}

function isValidSegment(i) {
  if (i.length > 1 && i.startsWith("0")) return false; // '01', '02' etc. leading zeroes invalid
  i = Number(i);
  return i >= 0 && i <= 255;
}

/**
													input
					2                     25           255
				5       55          5        52    2 25 255
			5  52   2 25 255    2 25 255  5 51        1 11 111  
			x  x    x  x  x                            x  135    35

*/

expect(restoreIpAddresses("25525511135")).to.eql([
  "255.255.11.135",
  "255.255.111.35",
]);

expect(restoreIpAddresses("0000")).to.eql(["0.0.0.0"])
expect(restoreIpAddresses("101023")).to.eql(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
console.log('done')