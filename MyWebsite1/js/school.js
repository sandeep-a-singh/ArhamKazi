
class School{
    constructor(
        name,
        majors,
        city,
        state,
        zipcode,
        country,
        from,
        to,
        courseWork,
        gpa,
        scale
    ){
        this.name=name;
        this.majors=majors;
        this.year=from+"-"+to;    
        this.courseWork=courseWork;
        this.totalGpa=gpa+"/"+scale;
        this.city=city;
        this.state=state;
        this.zipcode=zipcode;
        this.country=country;
    }
    
}

export default School;