import React from 'react'
import Card from './component/Card'

const App = () => {
    const developers = [
  {
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Arjun Mehta",
    country: "India",
    info: "Frontend developer who loves building responsive UI.",
    skills: ["Web Dev", "HTML", "CSS", "JavaScript"]
  },
  {
    profileImage: "https://www.newmynamepix.com/upload/post/sample/1589515256_New_Beautiful_Girl_Pictures_Profile_With_Name_Images.jpg",
    name: "Sophia Carter",
    country: "USA",
    info: "Full-stack developer passionate about scalable apps.",
    skills: ["Web Dev", "React", "Node.js", "MongoDB"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Liam Wong",
    country: "Singapore",
    info: "UI specialist focused on clean design systems.",
    skills: ["HTML", "CSS", "Figma", "JavaScript"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emma Silva",
    country: "Brazil",
    info: "Creative developer blending design and code.",
    skills: ["Web Dev", "Sass", "JavaScript", "UI/UX"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Noah Kim",
    country: "South Korea",
    info: "Backend engineer who enjoys API development.",
    skills: ["Node.js", "Express", "SQL", "JavaScript"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ava Müller",
    country: "Germany",
    info: "Frontend enthusiast specializing in animations.",
    skills: ["HTML", "CSS", "GSAP", "JavaScript"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Carlos Rivera",
    country: "Mexico",
    info: "Web developer with strong problem-solving skills.",
    skills: ["Web Dev", "React", "CSS", "JavaScript"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Mia Rossi",
    country: "Italy",
    info: "Passionate about modern frontend frameworks.",
    skills: ["Vue", "HTML", "CSS", "JavaScript"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ethan Brown",
    country: "UK",
    info: "Developer focused on performance optimization.",
    skills: ["Web Dev", "Lighthouse", "JavaScript", "CSS"]
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Yuki Tanaka",
    country: "Japan",
    info: "Detail-oriented frontend developer.",
    skills: ["HTML", "CSS", "JavaScript", "Accessibility"]
  }
];

  return (<>
     <div className="intro"><h1><u>Appilcation Of Props</u></h1></div>
    <div className='parent'>
      
       {developers.map(function(ele,idx){
        return <div key={idx}>
          <Card 
           name ={ele.name} 
           country ={ele.country} 
           info ={ele.info} 
           skills ={ele.skills} 
           img={ele. profileImage}
           />
        </div>
       })}
    </div>
    </>
  )
}

export default App
