import React from 'react';
import { CounterProvider } from './context';
import Counter from './Counter';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
