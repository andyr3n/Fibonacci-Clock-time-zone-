export default class City {
    constructor(name, timezoneOffset) {
      this.name = name;
      this.timezoneOffset = timezoneOffset;
    }
  
    getTime() {
      const currentTime = new Date();
      currentTime.setHours(currentTime.getUTCHours() + this.timezoneOffset);
      return currentTime;
    }
  }
  