


let currentLine = 0;

// const inputString = [79,477281,35729,731571,304179,305547,934188,709457,487577,740799,422124,934664,821726,122937,684498,973027,362219,427507,57743,851519,635584,275780,396945,334465,137798,244109,843043,219064,999505,667452,914911,92093,144733,469140,823664,448912,774687,276350,676868,780763,17149,98991,715426,838875,221928,918424,330400,584148,345930,388144,954166,500013,182423,351110,834478,320221,595219,677521,57784,113223,863472,972695,205316,526704,960334,547479,975616,735020,823829,170982,34281,359477,269973,749708,716851,10401,186630,47251,113048,51059,76,67213,551073,654817,936824,904050,493537,50541,100069,551321,163764,963542,42514,887580,490245,2848,435058,984361,256367,777387,155342,290649,136863,943816,558856,853715,954217,745486,419465,585764,796545,891859,171476,866117,546675,108299,770167,40211,158841,870236,110031,841105,352276,671045,728685,842522,673893,682242,345381,448760,459628,19222,257908,114991,963038,816764,487205,435753,80748,425169,21516,395792,317027,192993,261909,382201,819792,550575,940912,978633,939310,569442,819738,291586,240486,66921,652607,98]
const inputString = [370,516487,881639,208791,535709,658046,842282,17246,993309,329486,452999,74056,754655,993016,988348,590181,704508,250256,972382,524299,319330,431792,21431,258640,1233,359668,68725,241719,426589,239831,674598,175751,756318,74735,903042,292026,732781,263822,309272,726089,593308,280771,318644,866462,273786,306992,975142,978294,75747,947523,21091,913578,379314,42522,172217,380547,402190,759442,140766,347278,999273,333863,523030,755590,408599,944571,566115,659879,208393,875388,904468,320200,674658,741611,705162,948444,567102,680303,445236,642850,627826,466327,556427,525639,27349,247143,424686,948039,6584,565452,295317,5856,417814,336846,279945,826413,281416,846060,4791,8308,239946,427758,328509,914604,169368,33670,863047,736471,713973,826782,897820,860298,293109,454246,904437,838958,219888,329122,786996,226472,413073,82312,750828,830887,419158,30772,175799,219074,395331,699090,227382,635278,126847,74390,549881,814715,626560,931428,551185,859033,276708,449004,719330,88316,421749,142265,927274,160136,471387,714270,905108,402959,315081,655935,752346,734240,205206,928145,471813,119037,145733,699195,754315,272580,292085,822695,605794,918645,272621,156979,777677,549330,124482,15506,637646,64731,157771,83419,224867,147658,797689,648475,69116,631269,304409,821462,365508,28115,268105,355820,665652,413838,55015,419966,204917,865600,761160,810712,784244,552281,486190,80420,620110,129171,614426,776255,193902,290696,859674,937270,438354,175861,585744,507471,807131,408652,847432,691138,955267,115537,46958,620918,47874,620473,559383,771292,4571,839043,100502,307314,391323,586692,387734,529932,715863,520659,306186,428265,811356,684360,884034,768209,378720,469777,794179,704350,878429,641611,913988,352195,275647,960946,973113,842021,99917,532496,613312,104488,371538,713814,930302,281360,819005,318036,329791,53367,357194,154476,131,168549,838836,884165,936759,736056,353941,730937,440405,750869,891047,354392,103063,166693,833837,594676,8714,452253,645671,140525,75240,17208,372839,5542,817068,191843,842078,146858,763710,199271,301334,763841,886321,658670,648005,823079,394725,520445,72514,353629,271314,482061,708022,892877,167253,60357,487552,175967,512611,133222,834993,587851,668930,207831,593393,4496,918174,953970,669854,681884,153241,971189,445724,39561,148357,612229,381139,543082,132673,972153,896711,922487,454213,123231,815364,621467,183589,821415,315933,214699,473137,669425,321049,660566,877256,432942,665063,313929,386911,334916,995813,540152,824604,960036,98212,972961,90763,479351,34541,223437,970004,449752,145923,71,572983,479786,564182,275071,819701,398615,8269,292837,68039,329319,471902,463795,762261,136964,777724,149171,990381,292035,207823,333483,770570,306035,306444,861334,303886,340985,84770,273889,309236,749193,216604,882220,228979,299286,675790,48679,697901,684060,860016,765940,531878,331917,748234,812638,987382,525957,480308,977762,817992,688131,311244,588562,512666,136187,968395,335051,995673,53164,127439,304908,320856,344043,705627,68334,643329,899917,117013,859729,102475,495528,144168,120]
// const inputString = [3,0,2,2,3,2,0,2,2]
function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'stockLounge' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY onHand
 *  2. INTEGER_ARRAY supplier
 *  3. INTEGER demand
 * 
 * 
 * need to get today's max order - with waste = 0
 * order = demandPerday - onhand vs supplier stock
 * bruteforce: 
 *  1 -> supplier max
 *  calculate waste
 * 
 * optimisation:
 * 
 * use 0s first - onhand + supplierstock
 * use 1s if demand > 0s count?
 * sort by expiry date, subtract demandPerDay from each, get the negative numbers, fill with supplier?
 * does the order of supplier matter? - no?
 * 
 * 
 */
function stockLounge(onHand, supplier, demand) {
    // Sort both onHand and supplier creamers by their expiry days in ascending order.
    onHand.sort((a, b) => a - b);
    supplier.sort((a, b) => a - b);
  
    let orderedCount = 0;
    let available = [...onHand]; // Start with the on-hand stock
  
    for (let day = 0; ; day++) {
      // Remove expired creamers from the available stock
      available = available.filter(expiry => expiry > day);
  
      // Calculate how many creamers are needed for the current day
      const neededToday = demand;
      const availableToday = available.length;
      const usedToday = Math.min(neededToday, availableToday);
  
      // Remove the used creamers from the available stock (we don't need to track which ones)
      available.splice(0, usedToday);
  
      // If we couldn't meet the daily demand, we need to consider ordering
      if (usedToday < neededToday) {
        const canOrderToday = neededToday - usedToday;
        let orderedForToday = 0;
  
        // Iterate through the supplier's stock (which is sorted by expiry)
        for (let i = 0; i < supplier.length && orderedForToday < canOrderToday; i++) {
          const supplierExpiry = supplier[i];
          // We can order a creamer if its expiry is on or after the current day
          if (supplierExpiry >= day) {
            available.push(supplierExpiry); // Add the ordered creamer to our available stock
            orderedCount++;
            orderedForToday++;
            supplier[i] = -1; // Mark this supplier item as used (or remove it)
          }
        }
  
        // Remove the marked supplier items
        supplier = supplier.filter(expiry => expiry !== -1);
      }
  
      // Check if we have run out of all available and supplier stock
      if (available.length === 0 && supplier.length === 0) {
        break; // No more creamers to use or order
      }
  
      // Heuristic to prevent infinite loops in some edge cases:
      // If we've gone beyond a reasonable number of days (e.g., twice the initial total stock expiry), break.
      // This assumes that if we can't resolve within a certain timeframe, it's likely not possible without waste.
      const initialTotalExpiry = onHand.reduce((sum, expiry) => sum + expiry, 0) + supplier.reduce((sum, expiry) => sum + expiry, 0);
      if (day > 2 * (onHand.length + supplier.length + Math.max(...[0, ...onHand, ...supplier]))) {
        break;
      }
    }
  
    return orderedCount;
  }

// function stockLounge(onHand, supplier, demand) {
    
//         return bruteforceSol(onHand, supplier, demand)
    
// }
/**
 * 
 * @param {*} onHand 
 * @param {*} supplier 
 * @param {*} demand 
 * @returns {number} stockCount
 * @description need one single orderCount, after calculating for any number of days, demand - (onHand + supplier); zero waste, maximise orderCount
 * approach:
 * onhand_of_today > demand -> -1
 * onhand_of_today < demand -> supplier? or next day's onhand?
 * 
 * 
 * 
 * dry run:
 * [0,2,2], [2,0,2], 2 -> 3
 * [0,1,2,2], [1,2,0,2], 2 -> 4
 * [0,0,1,2], [1,0,0,3], 2 -> 2
 * [0,0,1,1,1], [1,1,1,1], 3 -> 1 or -1?
 * 
 */
function bruteforceSol(onHand, supplier, demand){

  let result = 0
  onHand.sort((a,b)=>a-b)
  supplier.sort((a,b)=>a-b)

  while(true){

    const todaysOnHand = onHand.filter(o=> o === 0)
    if(todaysOnHand > demand) return -1;//but this does not happen when we make counts properly, so how do we find a situation with non-zero waste?


    break;
  }


  return result;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const onHandCount = parseInt(readLine(), 10);

    let onHand = [];

    for (let i = 0; i < onHandCount; i++) {
        const onHandItem = parseInt(readLine(), 10);
        onHand.push(onHandItem);
    }

    const supplierCount = parseInt(readLine(), 10);

    let supplier = [];

    for (let i = 0; i < supplierCount; i++) {
        const supplierItem = parseInt(readLine(), 10);
        supplier.push(supplierItem);
    }

    const demand = parseInt(readLine(), 10);

    const result = stockLounge(onHand, supplier, demand);
    const result2 = bruteforceSol(onHand, supplier, demand);
		console.log({onHand, supplier, demand,result, bruteforceSol:result2})
    // ws.write(result + '\n');

    // ws.end();
}
main()