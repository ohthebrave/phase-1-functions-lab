// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42
    } else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance) {
    let feet = 264;
    if (distance > 42) {
        return (distance - 42) * feet;
    } else {
        return (42 - distance) * feet;
    }
}

function distanceTravelledInFeet(start, destination) {
    let distance = start < destination ? (destination - start) * 264 : (start - destination) * 264;
    return distance;
}


function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
