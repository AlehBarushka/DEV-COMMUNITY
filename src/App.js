import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>
          <a href="/#">Profile</a>
        </div>
        <div>
          <a href="/#">Messages</a>
        </div>
        <div>
          <a href="/#">News</a>
        </div>
        <div>
          <a href="/#">Music</a>
        </div>
        <div>
          <a href="/#">Settings</a>
        </div>
      </nav>
      <div className="content">
        <img src="https://picsum.photos/id/1/1200/500" alt="main img" />
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
