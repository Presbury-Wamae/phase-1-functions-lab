// Code your solution in this file!

function distanceFromHqInBlocks(street){
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}


function distanceFromHqInFeet(street){
    const hqStreet = 42;
    const feet = 264;
    return Math.abs((street - hqStreet) * feet);
}

function distanceTravelledInFeet(destination, start){
    const feet = 264;
    return Math.abs((destination - start) * feet);
}

function calculatesFarePrice(start, destination){
    const feet = 264;
    const Distance = Math.abs((destination - start) * feet);
    
    if (Distance > 2500) {
        return "cannot travel that far";
      } 
      else if (Distance > 2000) {
        return 25;
      } 
      else if (Distance > 400) {
        return (Distance - 400) * 0.02;
      }
       else {
        return 0;
      }    
}