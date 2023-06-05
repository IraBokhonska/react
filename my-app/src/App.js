//containers
import Blog from "./containers/Blog";
import Header from "./containers/Header";
import ImageBunner from "./containers/ImageBanner";
import News from "./containers/News";

function App() {
  return (
    <main className="main">
      <Header />
      <ImageBunner />
      <div className="content">
        <Blog />
        <News />
      </div>
    </main>
  );
}

export default App;
