//code your solutions here

let startBlock=  42;
let lengthOfBlockHq = 264;

function distanceFromHqInBlocks(blocks) {
    let result = blocks - startBlock;
    if (result < 0) { return result *-1}
     return result;

  }
  function distanceFromHqInFeet(lengthFromHq) {
    return distanceFromHqInBlocks(lengthFromHq) * lengthOfBlockHq;
    
  }

  function distanceTravelledInFeet(start, destination) {
    if(start > destination){
        return (start - destination) * lengthOfBlockHq
    }
    return (destination - start) * lengthOfBlockHq;
  }

  function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination)
  if (distanceTravelled<=400)
  {return 0}
  else if(distanceTravelled> 400 && distanceTravelled <2000){
    return 2.56}
    else if(distanceTravelled>2000 && distanceTravelled<2500){
      return 25}
      else if(distanceTravelled>2500){
        return"cannot travel that far"
      }
    }
  