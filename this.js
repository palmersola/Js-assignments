const photoSlideShow = {
  photoList: ["first", "second", "third", "fourth", "fifth", "sixth"],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    this.currentPhotoIndex++;
    this.getCurrentPhoto();
  },
  prevPhoto: function() {
    this.currentPhotoIndex--;
    this.getCurrentPhoto();
  },
  getCurrentPhoto: function() {
    this.logPhoto();
  },
  logPhoto: function() {
    photo = this.photoList[this.currentPhotoIndex] ? this.photoList[this.currentPhotoIndex] : "End of slideshow";
    console.log(photo);
  }
};
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
