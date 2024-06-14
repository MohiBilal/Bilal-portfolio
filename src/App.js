import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Experience from './Component/Experience/Experience';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
