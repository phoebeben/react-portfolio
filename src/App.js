import './App.css';
import './projects.css';
import './contact.css';
import './about.css';
import About from "./components/about";
import Projects from "./components/projects";
import islandHub from "../src/components/island-hub.png"
import wayfindr from "../src/components/wayfindr.png"
import Contact from "./components/contact";
// import Footer from "./components/footer";
// import Projects from "./components/projects";
// import Contact from "./components/contact";

function App() {
  return (
    <>
      <div className="container">
        <Contact />
        <About />
        <h2 id="project-header">Latest Projects</h2>
        <div className="projects-div card mb-4">
          <div className="d-flex flex-row">
            <Projects className="d-flex flex-row"
            description={"Worked on as part of a team where we made a clone of airbnb, working on the CRUD elements with ruby on rails. Users can filter the search of private islands to rent through clicking on the corresponding island category. They can book a stay at an island as well as upload their own island to stay at. We learned how to code as a team, working on branches and merging our work. We challenged ourselves with creating components and using SCSS to improve the front-end of the website."}
            image={islandHub}
            project={{
              name: "The Island Hub",
              techstack: "Ruby, Ruby on Rails, JavaScript, Stimulus, SQL, HTML, CSS, Heroku",
              link: "https://the-island-hub.herokuapp.com/",
              github: "https://github.com/phoebeben/the-island-hub"
            }}/>
            <Projects
            description={"Coded within a team of 4 as our final project for Le Wagon. Wayfindr is a travel itinerary generator that provides users with the ability to swap out activities they aren't interested in. We made extensive use of google's OpenAPI in order to seed the project. The swap function was of particular difficulty when creating this project. At present it uses only the backend to update the activity and therefore refreshes the page. To improve this design I would like to update the project to use AJAX and prevent the default refreshing of the page."}
            image={wayfindr}
            project={{
              name: "Wayfindr",
              techstack: "Ruby, Ruby on Rails, JavaScript, Stimulus, SQL, PostgreSQL, HTML, CSS, Heroku",
              link: "https://wayfindr.co.uk",
              github: "https://github.com/phoebeben/wayfindr"
            }}
            />
           </div>
        </div>
      </div>
    </>
  );
}

export default App;
