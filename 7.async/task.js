class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id == null) {
            throw new Error('ID не найден!');
        }
        let isAlarm = this.alarmCollection.some(alarm => alarm.id === id);
        if (isAlarm) {
            console.error('Такой ID уже существует!');
            return;
        }
        let alarm = {
            time,
            callback,
            id,
        }
        this.alarmCollection.push(alarm);
    }

    removeClock(id) {
        const alarmLength = this.alarmCollection.length;
        const alarmFilter = this.alarmCollection.filter(alarm => alarm.id !== id);
        this.alarmCollection = alarmFilter;
        return alarmLength != alarmFilter.length;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        function checkClock(alarm) {
            if (alarm.time == getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        const bindedCheckClock = checkClock.bind(this);
        
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => bindedCheckClock(alarm)), 1000);
        }
    }
      
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => console.log(`Будильник № ${alarm.id} сработает в ${alarm.time}`))
        console.log(`Количество будильников в очереди: ${this.alarmCollection.length}`);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}



function testCase() {
    const alarm = new AlarmClock();
    alarm.addClock('08:00', () => console.log('Подъем на работу!'), 1);
    alarm.addClock('08:01', () => console.log('Вставай давай!'), 2);
    alarm.addClock('08:02', () => console.log('Вставай давай!'), 3);
    alarm.addClock('08:03', () => console.log('Вставай давай!'), 4);
    alarm.addClock('08:04', () => console.log('ВСТАВААААЙ! А то уволят)'), 1);
    alarm.removeClock(1);
    alarm.printAlarms();
    alarm.start();
    alarm.stop();
    alarm.clearAlarms();
    alarm.printAlarms();
}
testCase();
