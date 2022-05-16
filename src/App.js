import './App.css';
import Card from './component/Card';
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className='header'>
        <p className='header-title'>Reliable, efficient delivery</p>
        <p className='header-sub-title'>Powered by Technology</p>
        <p className='header-description'>Our Artificial intelligence powered tools use millions of project data point to ensure that your project is successful</p>
      </div>
      <div className='card-section'>
        <div className='col-1'>
          <Card data={data[0]}/>
        </div>
        <div className='col-2'>
          <Card data={data[1]}/>
          <Card data={data[2]}/>
        </div>
        <div className='col-3'>
          <Card data={data[3]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
