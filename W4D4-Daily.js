class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
  }
}

let newVid = new Video("Test", "TestAgain", 100);
newVid.watch();
