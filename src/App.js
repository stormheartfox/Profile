import "./style.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Footer from "./components/Footer/Footer";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
function App() {
  return (
    <div className="App">
      <main>
        <header>
          <HeroBanner />
        </header>
        <div class="profile">
          <ProfilePhoto />
          <AboutMe />
          <SkillsContainer />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
