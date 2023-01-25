import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebaseAuthorized/firebaseAuthorized.init';
const auth = getAuth(app);

const registerForm = (e) => { 
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const email = result.email;
      const password = result.password;
      console.log(email, password)
    })
    .catch(error => { 
      console.error('error' ,error)
    })
}


function App() {
  return (
    <div className="App">
      <form onSubmit={registerForm}>
        <input type="email" name="email" id="email" placeholder='Your Email' required />
        <input type="password" name="password" id="password" placeholder='Password' required />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
