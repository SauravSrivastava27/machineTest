import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [user, setUser] = useState([]);
  // const [search, setSearch] = useState("");
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch(url);

        const data = await response.json();

        setUser(data);
      }
      fetchUsers();
    }, []);

    // const filterTitle = user.filter((user) => user.title.toLowerCase().include(search.toLowerCase()) )
    // console.log(filterTitle);
  return (
    
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <ul>
      {user.map(user => (
        <li key={user.userId}>{user.title}</li>
      ))}
      </ul>
      </div>
  )
}

