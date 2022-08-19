class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id == null) {
            throw new Error('ID не найден!');
        }
        let isAlarm = this.alarmCollection.findIndex((alarm) => {
            return alarm.id === id;
        });
        if (isAlarm !== -1) {
            console.error('Такой ID уже существует!');
            return this;
        }
        let alarmObj = {
            time: time,
            callback: callback,
            id: id,
        }
        this.alarmCollection.push(alarmObj);
    }

    removeClock(id) {
        let alarmArr = this.alarmCollection.filter(function(alarm) {
            return alarm.id !== id;
        });
       this.alarmCollection = alarmArr;
       if (this.alarmCollection.some(alarm => alarm.id === id)) {
            return false;
       } else {
        return true;
       }

    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return this.alarmCollection.callback();
            }
        }
        
        if (this.timerId === null) {
            this.timerId = 1;
            this.timerId = setInterval(() => checkClock, 1000);
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
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}



function testCase() {
    const alarm = new AlarmClock();
    alarm.addClock('08:00', () => console.log('Подъем на работу!'), 1);
    alarm.addClock('08:01', () => {console.log('Вставай давай!'); alarm.removeClock(2)}, 2);
    alarm.addClock('08:02', () => console.log('ВСТАВААААЙ! А то уволят)'), 1);
    // alarm.addClock('08:03', () => console.log('Это перебор! Тебе так не кажется?'));
    alarm.printAlarms();
    alarm.start();
    alarm.stop();
    alarm.clearAlarms();
    alarm.printAlarms();
}
testCase();
