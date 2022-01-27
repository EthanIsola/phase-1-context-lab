/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(data) {
    let employee = {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(data) {
    let employees = []
    for(let arr of data){
        employees.push(createEmployeeRecord(arr))
    }
    return employees
}

function createTimeInEvent(stamp) {
    let data = stamp.split(' ')
    let timeIn = {
    type: "TimeIn",
    hour: Number(data[1]),
    date: data[0]
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(stamp) {
    let data = stamp.split(' ')
    let timeOut = {
    type: "TimeOut",
    hour: Number(data[1]),
    date: data[0]
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(record, date){
    let firstTime;
    let secondTime;

    for(let item of record.timeInEvents){
        if(item.date == date){
            firstTime = item.hour
        }
    }
    for(let item of record.timeOutEvents){
        if(item.date == date){
            secondTime = item.hour
        }
    }
    return this
}

function wagesEarnedOnDate(record, date){
    console.log(hoursWorkedOnDate(record, date)*record.payPerHour)
    return hoursWorkedOnDate(record, date)*record.payPerHour
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

