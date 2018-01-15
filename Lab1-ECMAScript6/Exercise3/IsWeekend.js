function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    const dayMap = ["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];
    return dayMap[day];
}

console.log(isWeekend());