function countDown(){
    const deadline = new Date('Dec 31 2023 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const gap = deadline - currentTime;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const day = hours * 24;

    const distanceDays = Math.floor(gap / day);
    const distanceHours = Math.floor((gap % day) / hours)
    const distanceMins = Math.floor((gap % hours) / minutes);
    const distanceSecs = Math.floor((gap % minutes) / seconds)

    document.querySelector("#days").innerHTML = distanceDays;
    document.querySelector("#hours").innerHTML = distanceHours;
    document.querySelector("#minutes").innerHTML = distanceMins;
    document.querySelector("#seconds").innerHTML = distanceSecs;
}

setInterval(countDown, 1000)