import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import StyledComponent from './components/styledComponent';
import InputField from './components/inputField';
import Card from './components/card';

function App() {
  return (
    <>
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

      <Card />
      <Card />
      <Card />

    </>
  );
}

export default App;
