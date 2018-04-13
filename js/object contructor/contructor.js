function Course(title, instructor, level, published, views){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
}

const Course01 = Course('javascript', 'unknown', 0, true, 0);

console.log(Course01);