import { useState } from "react";
import Grid from "./components/GridTemp.jsx";
import Card from "./components/Card.jsx";
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/FeaturedProjects.jsx";
import ProjectList from "./components/ProjectList.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <div className="intro-screen">
        <h1 onClick={() => setShowIntro(false)}>
          Akshay Belure
        </h1>
        <p>Click me!!!</p>
      </div>
    );
  }

  return (
    <Grid key={showIntro ? "intro" : "grid"}>

      <Card className="hero">
        <Hero />
      </Card>

      <Card className="profile">
        <Profile />
      </Card>

      <Card className="featured">
        <Skills />
      </Card>

      <Card className="about">
        <About />
      </Card>

      <Card className="contact">
        <Contact />
      </Card>

      <Card className="projects">
        <ProjectList />
      </Card>
    </Grid>
  );
}

export default App;
