import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <div className='nemo1'></div>
        <div className='nemo2'></div>
        <div className='nemo3'></div>
        <div className='nemo4'></div>
        <div className='nemo5'></div>
        <div className='nemo6'></div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100px);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  column-gap: 5px;
  row-gap: 5px;
  width: 400px;
  height: auto;
  padding: 5px;
  border-radius: 20px;
  border: 5px solid #222;
  .nemo1{
    background: red;
    border: 5px solid #222;
    border-radius: 20px;
    grid-column: 1/4
  }
  .nemo2{
    background: orange;
    border: 5px solid #222;
    border-radius: 20px;
  }
  .nemo3{
    background: yellow;
    border: 5px solid #222;
    border-radius: 20px;
    grid-column: span 2;
  }
  .nemo4{
    background: green;
    border: 5px solid #222;
    border-radius: 20px;
  }
  .nemo5{
    background: blue;
    border: 5px solid #222;
    border-radius: 20px;
  }
  .nemo6{
    background: purple;
    border: 5px solid #222;
    border-radius: 20px;
  }
`

export default App;
