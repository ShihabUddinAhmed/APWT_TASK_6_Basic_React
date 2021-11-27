import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import StudentList from './Components/StudentList/StudentList';
import StudentDetails from './Components/StudentList/StudentDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/student-list">
            <StudentList />
          </Route>
          <Route exact path="/student-list/:name/:id/:cgpa/:pass">
            <StudentDetails />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
