class Job {
  constructor(name, industry, requiresDegree, field, salary) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.salary = salary;
  }
  getName() {
    console.log(this.name);
  }
  getFieldAndIndustry() {
    console.log(`${this.field} ${this.industry}`);
  }
  getDegree() {
    let degree = this.requiresDegree
      ? "This job requires a degree."
      : "This job doesn't require a degree.";
    console.log(degree);
  }
  getSalary() {
    console.log(`$${this.salary}`);
  }
}

class JobInterview extends Job {
  constructor(
    name,
    industry,
    requiresDegree,
    field,
    salary,
    requiredExperience,
    highSchoolDiploma
  ) {
    super(name, industry, requiresDegree, field, salary);
    this.requiredExperience = requiredExperience;
    this.highSchoolDiploma = highSchoolDiploma;
  }

  getExperience() {
    console.log(this.requiredExperience);
  }
  getHighSchool() {
    let diploma = this.getHighSchool
      ? "This job requires a high school diploma."
      : "This job doesn't require a high school diploma.";
    console.log(diploma);
  }
}

const historyTeacher = new Job(
  "History Teacher",
  "Education",
  true,
  "History",
  60000
);

const webDeveloper = new Job(
  "Junior Web Developer",
  "Tech",
  false,
  "Programming",
  65000
);

const electrician = new Job(
  "Electrician",
  "Construction",
  false,
  "Installation",
  90000
);

const mechanicalEngineer = new JobInterview(
  "Mechanical Engineer",
  "Science",
  true,
  "Engineering",
  120000,
  "4 years",
  true
);

historyTeacher.getName();
historyTeacher.getFieldAndIndustry();

webDeveloper.getName();
webDeveloper.getDegree();

electrician.getFieldAndIndustry();
historyTeacher.getSalary();

mechanicalEngineer.getSalary();
mechanicalEngineer.getExperience();
mechanicalEngineer.getHighSchool();
