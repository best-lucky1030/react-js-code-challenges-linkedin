import './App.css';
import './index.css';
import ColorRenderer from './01-color-renderer/ColorRenderer';
import DarkMode from './02-dark-mode/DarkMode';
import FormValidator from './03-form-validator/FormValidator';
import DogPics from './04-dog-pics/DogPics';

function App() {
  return (
    <div className="App">
      {/* <ColorRenderer /> */}
      {/* <DarkMode /> */}
      {/* <FormValidator /> */}
      <DogPics />
    </div>
  );
}

export default App;
