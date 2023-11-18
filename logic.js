

// console.log(nowTime.split(','))
// console.log(timeArr[1])


function printTime() {
    const mydate = new Date();
    let nowTime = mydate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const timeArr = nowTime.split(',')
    console.log(`Now Time is: ${timeArr[1]}`)
};
// printTime(timeArr);

setInterval(printTime,1000)
printTime()
// console.log(`${mydate.getHours()}:${mydate.getMinutes()}:${mydate.getUTCSeconds()}`)