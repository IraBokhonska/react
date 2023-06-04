import { AiFillBug } from "react-icons/ai";
//containers

import Header from "./containers/Header/Header";
import OtherHeader from "./containers/OtherHeader";
import Footer from "./containers/Footer";

//assets
import image from "./assets/images/image.png";

//elements
import Button from "./elements/Button";
const TITLE = "PAGE_TITLE";

const names = ["josh", "nick", "bill", "ola"];

function App() {
  return (
    <main className="lsn-main">
      <Header />
      <AiFillBug />
      <h1>{TITLE}</h1>
      <OtherHeader />
      <ul>
        {names.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <Button>text</Button>
      <Button>some text</Button>
      <Button>some text2</Button>
      <section>
        <img src={image} alt="img"/>
        <img src="https://picsum.photos/seed/picsum/200/300" alt="img"/>
      </section>
      <Footer />
    </main>
  );
}

export default App;
