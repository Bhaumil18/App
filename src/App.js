import './App.css';
import FormPage from './components/Form';
import Form from './components/Form';
import ChangeTheme from './components/change-theme';
import ScrollIndicator from './components/scroll-indicator';
import SearchAutoComplete from './components/serach-autocomplete';
import Test from './components/use-fetch';
import LoadMoreData from './components/load-more-data';
import Accordion from './components/accordian/index';
// import ImageSlider from './components/image-slider/index';
import QrCodeGenerator from './components/qr-code-generator/index';

function App() {
  return (
    <div className="App">
      <Accordion />

      {/* <ImageSlider url="https://picsum.photos/v2/list?page=1&limit=10"></ImageSlider> */}

      <LoadMoreData url = "https://dummyjson.com/products" limit={20} />

      <QrCodeGenerator/>

      <ChangeTheme></ChangeTheme>

      <ScrollIndicator url = "https://dummyjson.com/products" limit={100} ></ScrollIndicator>

      <SearchAutoComplete/>

      <Test></Test>

      <FormPage/>

      
    </div>
  );
}

export default App;
