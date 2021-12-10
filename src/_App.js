import { useState } from 'react';
// Props / Propiedades

// const props = {
//   text: 'Click here!',
//   onButtonClick: [Function]
//   children: [ReactNode]
// }

// props.onButtonClick

// API
const Button = (props) => {
  return <button onClick={props.onButtonClick}>{props.children}</button>;
};

// Compound Components
// Design patterns in React

// Ternary operator

// If/Else

// if(true) {
//   console.log('es verdadero')
// } else {
//   console.log('es falso :c')
// }

// condition ? 'es verdadero' : 'es falso :c'

// Array y Object Destructuring
// React 16.8 -> Hooks
const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  function showMessage() {
    alert('Genial diste click');
  }

  function toggleMoreContent() {
    // if (isVisible === false) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }

    // NOT operator
    // Las funciones que actualizan el estado son asincronas
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <div>
      Hola Mundo
      {/* <Button text="Click here!" onButtonClick={showMessage} />
      <Button text="View more" onButtonClick={toggleMoreContent} /> */}
      <Button onButtonClick={toggleMoreContent}>View more</Button>
      {isVisible ? (
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, id.</div>
      ) : null}
    </div>
  );
};

export default App;
