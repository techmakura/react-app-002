import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import StyledComponent from './components/styledComponent';
import InputField from './components/inputField';
import Card from './components/card';
import Heading from './components/heading';
import Button from './components/button';

function App() {
  return (
    <>
    <Header />
      <InputField
        type="text"
        placeholder="Enter your username"
        name="username"
        label="Username"
      />
      <InputField
        type="password"
        placeholder="Enter your Password"
        name="password"
        label="Password"
      />
      <InputField
        type="email"
        placeholder="Enter your email"
        name="email"
        label="Email"
      />

      {/* <Heading type="h1" title="This is heading one" /> */}
      {/* <Heading type="h2" title="This is heading two" /> */}
      {/* <Heading type="h3" title="This is heading three" /> */}
      {/* <Heading type="h4" title="This is heading four" /`> */}
      <Heading type="h5" title="This is heading five" />
      {/* <Heading type="h6" title="This is heading six" /> */}
      <Button />
      <Button type="secondary" />

    </>
  );
}

export default App;
