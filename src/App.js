function App() {
  return (
    <div className="App">
      <main>
        <header></header>
        <div class="profile">
          <div class="profileContent">
            <img
              src="https://i.imgur.com/wsagIbT.jpeg"
              alt="Profile headshot"
            />
            <h1> Hi, I'm Michael!</h1>
            <p>
              I am a Software Engineer located in Central Coast, NSW. I
              currently work for Australia Post; one of Australia's most
              recognizable brands, delivering the majority of the countries
              parcels. I work as a Data-Analyst keeping key stakeholders of the
              business informed about the day to day operations of the business.
              <br />
              <br />
              As an Indigenous Australian from Bundjalung Country, my passion
              for projects lies in creating accessibility and empowerment for
              other Indigenous Australians throughout the nation to succeed in
              the tech industry.
            </p>
          </div>
          <div class="linkContainer">
            <a href="https://github.com/michaeljgrant">GitHub</a>
            <a href="https://www.linkedin.com/in/michael-v-1941b9201/">
              Linked-In
            </a>
            <button>Resume</button>
          </div>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}

export default App;
