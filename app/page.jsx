import Background from "./components/desginElements/background";
import Tilt from "./components/desginElements/tilt";
import Toggle from "./components/buttons/toggle";
import ContentBox from "./components/contentBox";
export default function Home() {
  return (
    <div id="container" className="wrapper">

      <Background />
      <ContentBox />
      <Toggle />
      <Tilt />      

      <footer></footer>
    </div>
  );
}
