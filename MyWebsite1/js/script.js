

import School from "./school.js"

const masters=new School(
    "Stevens Institute of Technology",
    "Computer Science",
    "Hoboken",
    "New Jersey",
    "07307",
    "United States",
    2020,
    2022,
    ["DBMS","TCP/IP"],
    3.0,
    4.0
);
const bachelors=new School(
    "Vidyavardhini's College of Engineering and Technology",
    "Computer Science",
    "Vasai",
    "Maharashtra",
    "431256",
    "India",
    2015,
    2019,
    ["DBMS","TCP/IP"],
    7.65,
    10.00
);
const juniorCollege=new School(
    "Royal College",
    "Science",
    "Mumbai",
    "Maharashtra",
    "401107",
    "India",
    2013,
    2015,
    ["DBMS","TCP/IP"],
    8.7,
    10
);
const highSchool=new School(
    "Cosmopolitan High School",
    "General",
    "Mumbai",
    "Maharashtra",
    "401107",
    "India",
    2005,
    2015,
    ["DBMS","TCP/IP"],
    9,
    10
);
console.log(masters);
console.log(bachelors);
console.log(juniorCollege);
console.log(highSchool);

const masterContent=`
<p class="content"style="color:#ffffe0">
    Name: <span>${masters.name}</span><br>
    Majors: <span>${masters.majors}</span><br>
    City: <span>${masters.city}</span><br>
    State: <span>${masters.state}</span><br>
    Zipcode: <span>${masters.zipcode}</span><br>
    Country: <span>${masters.country}</span><br>
    Year: <span>${masters.year}</span><br>
    CourseWork: <span>${masters.courseWork}</span><br>
    Gpa: <span>${masters.totalGpa}</span>
</p>
`
const bachelorContent=`
<p class="content"style="color:#ffffe0"}>
    Name: <span>${bachelors.name}</span><br>
    Majors: <span>${bachelors.majors}</span><br>
    City: <span>${bachelors.city}</span><br>
    State: <span>${bachelors.state}</span><br>
    Zipcode: <span>${bachelors.zipcode}</span><br>
    Country: <span>${bachelors.country}</span><br>
    Year: <span>${bachelors.year}</span><br>
    CourseWork: <span>${bachelors.courseWork}</span><br>
    Gpa: <span>${bachelors.totalGpa}</span>
</p>
`
const juniorContent=`
<p class="content"style="color:#ffffe0">
    Name: <span>${juniorCollege.name}</span><br>
    Majors: <span>${juniorCollege.majors}</span><br>
    City: <span>${juniorCollege.city}</span><br>
    State: <span>${juniorCollege.state}</span><br>
    Zipcode: <span>${juniorCollege.zipcode}</span><br>
    Country: <span>${juniorCollege.country}</span><br>
    Year: <span>${juniorCollege.year}</span><br>
    CourseWork: <span>${juniorCollege.courseWork}</span><br>
    Gpa: <span>${juniorCollege.totalGpa}</span>
</p>
`
const highSchoolContent=`
<p class="content" style="color:#ffffe0">
    Name: <span>${highSchool.name}</span><br>
    Majors: <span>${highSchool.majors}</span><br>
    City: <span>${highSchool.city}</span><br>
    State: <span>${highSchool.state}</span><br>
    Zipcode: <span>${highSchool.zipcode}</span><br>
    Country: <span>${highSchool.country}</span><br>
    Year: <span>${highSchool.year}</span><br>
    CourseWork: <span>${highSchool.courseWork}</span><br>
    Gpa: <span>${highSchool.totalGpa}</span>
</p>
`


const edu=`
<h2 class="abouth2">EDUCATION</h2>
                <label class="level"for="degreess">Select level:</label>
                <select class="dropdown"id="degrees">
                    <option  value="masters">Masters</option>
                    <option  value="bachelors">Bachelors</option>
                    <option  value="juniorCollege">Junior College</option>
                    <option  value="highSchool">High School</option>
                </select><br>
                <button id="buttonId" >Confirm</button>`
const work=`
<h2 class="abouth2">WORK EXPERIENCE</h2>
<p class="content">
Company: <span>WNS</span><br>
Location: <span>Mumbai, India</span><br>
Position: <span>Associate consultant</span><br>
Description: <span>Streamlined end-to-end cargo shipment processes for a portfolio of 50+ clients, achieving
50% reduction in shipment processing time</span>
</p>
`
const proj=`
<h2 class="abouth2">PROJECTS</h2>
<div class="project">
        <div class="proj">
            <h3 class="abouth3">PORTFOLIO</h3>
            <p class="content">
                I made this portfolio from scratch using HTML, JS and CSS.
                This website covers all the fundamental required to build a website
                and I have also put into use animations, injecting html code from script files
                , logo such as facebook, instagram and linkdin, multiple pages, downloads.
                Please leave a feedback.
            </p>
        </div>  
        <div class="proj">
            <h3 class="abouth3">First Person Shooter in Augmented Reality</h3>
            <p class="content">
                Led a team of 3 member for the final project in undergrad final year. Created a first-person
                shooter game in Unity and used Vuforia to augment assets in the project.
            </p>
        </div>     
</div>
`

document.querySelector(".edu").onclick=function(){
    document.querySelector(".selection .work").classList.remove("active");
    document.querySelector(".selection .pro").classList.remove("active");
    document.querySelector(".selection .edu").classList.add("active");
    document.querySelector(".test").innerHTML=edu;
    document.getElementById("buttonId").onclick=function(){
    
        let x=document.querySelector("#degrees").value
        if(x=="masters"){
            console.log("c")
            document.querySelector(".data").innerHTML=masterContent;
        }
        else if(x=="bachelors"){
            document.querySelector(".data").innerHTML=bachelorContent;
        }
        else if(x=="juniorCollege"){
            document.querySelector(".data").innerHTML=juniorContent;
        }
        else if(x=="highSchool"){
            document.querySelector(".data").innerHTML=highSchoolContent;
        }   
    
    }
}
document.querySelector(".work").onclick=function(){
    
    document.querySelector(".selection .edu").classList.remove("active");
    document.querySelector(".selection .pro").classList.remove("active");
    document.querySelector(".selection .work").classList.add("active");
    document.querySelector(".data").innerHTML=" ";
    document.querySelector(".test").innerHTML=work
}
document.querySelector(".pro").onclick=function(){
    document.querySelector(".selection .edu").classList.remove("active");
    document.querySelector(".selection .work").classList.remove("active");
    document.querySelector(".selection .pro").classList.add("active");
    document.querySelector(".data").innerHTML=" ";
    document.querySelector(".test").innerHTML=proj
}


    