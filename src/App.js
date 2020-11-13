import Header from '../src/components/Header'
import ContentDate from '../src/components/ContentDate'
import '../src/css/style.css';
import Currency from './components/CurrencyBase';

function App({ country }) {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <ContentDate />
          <Currency country={country} />
        </div>
      </div>
    </div>
  );
}

export default App;
