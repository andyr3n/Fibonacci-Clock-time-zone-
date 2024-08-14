export default class Clock {
    static calculateAngle(date) {
      const hours = date.getHours() % 12;
      const minutes = date.getMinutes();
      const hourAngle = (hours * 30) + (minutes * 0.5);
      const minuteAngle = minutes * 6;
      let angle = Math.abs(hourAngle - minuteAngle);
      angle = Math.min(360 - angle, angle);
      return angle;
    }
  }
  