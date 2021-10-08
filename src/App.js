import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">About</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <img src="https://picsum.photos/id/1/1000/600" alt="" />
      </div>
    </div>
  );
}

export default App;
