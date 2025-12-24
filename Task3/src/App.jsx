import { useState } from 'react'
import Card from './components/Card.jsx'

function App() {
  
 let users = [
  {
    "id": 1,
    "name": "Sophie Bennett",
    "isVerified": true,
    "role": "Product Designer who focuses on simplicity & usability.",
    "followers": 312,
    "projects": 48,
    "avatarUrl": "img1.jpg"
  },
  {
    "id": 2,
    "name": "Marcus Chen",
    "isVerified": true,
    "role": "Senior UX Engineer building accessible digital experiences.",
    "followers": 854,
    "projects": 122,
    "avatarUrl": "img2.jpg"
  },
  {
    "id": 3,
    "name": "Elena Rodriguez",
    "isVerified": false,
    "role": "Freelance Illustrator and Brand Identity Strategist.",
    "followers": 1205,
    "projects": 74,
    "avatarUrl": "img3.jpg"
  },
  {
    "id": 4,
    "name": "David Park",
    "isVerified": true,
    "role": "Lead Motion Designer specializing in micro-interactions.",
    "followers": 529,
    "projects": 31,
    "avatarUrl": "img4.jpg"
  },
  {
    "id": 5,
    "name": "Sarah Jenkins",
    "isVerified": false,
    "role": "Front-end Developer with a passion for clean, minimal code.",
    "followers": 218,
    "projects": 15,
    "avatarUrl": "img5.jpg"
  },
  {
    
  }
]

  return (
    <div className='flex justify-evenly '>
       {users.map((user)=>{
        return <Card name={user.name} role={user.role} followers={user.followers} projects={user.projects} img={user.avatarUrl}/>
       })} 
    </div>
  )
}

export default App
