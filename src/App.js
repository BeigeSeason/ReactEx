import logo from './logo.svg';
import './App.css';
import JsxSyntax from "./JSX문법";
import GreetingComponent from './GreetingComponent';
import WelcomeProps from "./WelcomeProps";
import Articles from './Articles';
import MyComponent from './MyComponent';
import BoxComponent from './BoxComponent';

const productInfo = {
  date: "2024-09-01",
  info: "I Phone Ringing"
}


function App() {
  return (
    <>
      {/* <JsxSyntax /> */}
      {/* <GreetingComponent /> */}
      <WelcomeProps
        name="김심야"
        job="뮤지션"
        addr="서울시 송파구"
        isAdult={true}
        info={productInfo.info} />
      <hr />

      {/* <Articles /> */}

      <MyComponent name="김심야" age={29} />

      <BoxComponent>이 사이의 내용을 받아서 랜더링 1</BoxComponent>
      <BoxComponent>이 사이의 내용을 받아서 랜더링 2</BoxComponent>

    </>

  );
}

export default App;
