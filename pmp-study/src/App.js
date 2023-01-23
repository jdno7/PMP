import logo from './logo.svg';
import './App.css';
import FlashCards from './FlashCards';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Container>
        <FlashCards/>
      </Container>
    </div>
  );
}

export default App;
