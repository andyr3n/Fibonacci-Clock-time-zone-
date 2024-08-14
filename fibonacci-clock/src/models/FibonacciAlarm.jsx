export default class FibonacciAlarm {
    constructor() {
      this.sequence = [1, 1];
      this.currentIndex = 0;
      this.startTime = new Date();
      this.nextAlarmTime = this.calculateNextAlarmTime();
    }
  
    // get the next Fibonacci number
    getNextFibonacci() {
      if (this.sequence.length < this.currentIndex + 1) {
        const nextValue = this.sequence[this.currentIndex - 1] + this.sequence[this.currentIndex - 2];
        this.sequence.push(nextValue);
      }
      return this.sequence[this.currentIndex];
    }
  
    // calculate the next alarm time
    calculateNextAlarmTime() {
      const hoursToNextAlarm = this.getNextFibonacci();
      this.currentIndex++;
      const nextAlarm = new Date(this.startTime.getTime() + hoursToNextAlarm * 60 * 60 * 1000);
      return nextAlarm;
    }
  
    // get time remaining until the next alarm
    timeUntilNextAlarm() {
      const now = new Date();
      const timeRemaining = this.nextAlarmTime - now;
      return timeRemaining > 0 ? timeRemaining : 0;
    }
  
    // trigger the next alarm and calculate the following one
    triggerNextAlarm() {
      this.nextAlarmTime = this.calculateNextAlarmTime();
      alert('Alarm! Time for your next task!');
    }
  }
  