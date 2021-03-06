class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  twoDigitsNumber(number) {
    if (number.toString().length === 1){
      return `0${number}`
    } else {
      return `${number}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
     this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}