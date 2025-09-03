
import Link from '@mui/material/Link'
import './App.css'


function App() {

  const styleText = {  color: '#ffff', textAlign: 'left' }

  const styleLink = {  color: '#ffff', textAlign: 'left' }


  return (
    
      <div stlye = {{styleText }}>
      <h1 style={{ styleText }}>Nashville Homeless Services</h1>  
      <h2 style={{ styleText }}>This is a resource for homeless individuals in Nashville, TN to find meal schedules and other services.</h2>  
      <h3 style={{ styleText }}>Daily Resources</h3>
      <Link target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQlUKhgsxno1aW5dQXRhmT0Zfh-kTjoYO4hZHcICi4XI0mNJqjC2aok0OiM3s4e28gn13R4MCo4nsEl/pub"  color="#ffff">Nashville Rescue Mission</Link>
      <h4 style={{ styleText }}>Meals, Showers, Clothing, Shelter</h4>
      <Link target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQlUKhgsxno1aW5dQXRhmT0Zfh-kTjoYO4hZHcICi4XI0mNJqjC2aok0OiM3s4e28gn13R4MCo4nsEl/pub"  color="#ffff">Commuinity Care Fellowship (Ken & Carol's)</Link>
      <h4 style={{ styleText }}>Meals, Showers, Clothing, Shelter</h4>
      <Link target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQlUKhgsxno1aW5dQXRhmT0Zfh-kTjoYO4hZHcICi4XI0mNJqjC2aok0OiM3s4e28gn13R4MCo4nsEl/pub"  color="#ffff">The Dwelling Place</Link>
      <h4 style={{ styleText }}>Meals, Showers, Clothing, Shelter</h4>
      <Link target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQlUKhgsxno1aW5dQXRhmT0Zfh-kTjoYO4hZHcICi4XI0mNJqjC2aok0OiM3s4e28gn13R4MCo4nsEl/pub"  color="#ffff">Room In The Inn</Link>
      <h4 style={{ styleText }}>Meals, Showers, Clothing, Shelter</h4>
      <Link target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQlUKhgsxno1aW5dQXRhmT0Zfh-kTjoYO4hZHcICi4XI0mNJqjC2aok0OiM3s4e28gn13R4MCo4nsEl/pub"  color="#ffff">The Salvation Army</Link>
      <h4 style={{ styleText }}>Meals, Showers, Clothing, Shelter</h4>
      <h3 style={{ styleText }}>Weekly Resources</h3>
      <h4 style={{ styleText }}>Medical, Dental, Vision, Mental Health, Legal, Employment, Housing</h4> 
      <h2 style={{ styleText }}>Click the link below to view the meal schedule</h2> 
      <Link target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQlUKhgsxno1aW5dQXRhmT0Zfh-kTjoYO4hZHcICi4XI0mNJqjC2aok0OiM3s4e28gn13R4MCo4nsEl/pub"  color="#ffff">
        Meal Schedule
      </Link>
      </div>

    
  )
}

export default App
