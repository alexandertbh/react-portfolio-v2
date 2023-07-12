import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Alex's React App Testing</h1>
      </header>
      <section className="about-me">
        <h2> About Alex Horning</h2>
        <p>
          Hi! My name is Alex Horning and I am a former Technical Recruiter
          turned Developer. I started my career in recruiting and moved up until
          I was a Technical Recruiter for Google where I had the opportunity to
          work with and hire some incredible Software Engineers. As I progressed
          in my role I saw my interests turn to data and analtics in the form of
          SQL. By the end of my time there I was creating, managing and
          improving several dashboards using SQL and some light Google Workspace
          AppScripting. When I was laid off in January of 2023 I felt like it
          was the perfect time to make a change and move into a new career path.
          After a 13 week bootcamp I am ready to take the next step in my career
          and move info fulltime development and analytics.
        </p>
      </section>
      <section className="projects"></section>
      <section className="resume">{/* add pdf of resume */}</section>
      <section className="contact-me">
        <h3> Contact Me</h3>
        <form>
          {/* add nodemailer/email application */}
          {/* add forms for name of sender, email, and message */}
          <input></input>
        </form>
      </section>
    </div>
  );
}

export default App;
