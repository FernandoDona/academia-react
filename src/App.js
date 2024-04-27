
import './styles/main.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Workout from './pages/Workout';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import WorkoutForm from './pages/WorkoutForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-2 pe-4 ps-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rotinas" element={<Home/>} />
          <Route path="/treinos/*">
            <Route index element={<Workouts/>} />
            <Route path="new" element={<WorkoutForm/>} />
            <Route path=":id/*" element={<Workout/>} />
          </Route>
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
