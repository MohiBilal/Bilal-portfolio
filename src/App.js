import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
