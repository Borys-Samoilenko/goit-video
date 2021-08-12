import React from 'react';
import Logo from './components/Logo';
import PaintingList from './components/PaintingList';
import Panel from './components/Panel';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Panel title="Latest news">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <a href="https://reactjs.org">Read more...</a>
      </Panel>

      <Panel>
        <p>Porro magni laundatium aspernatur debitis deserunt ipsam</p>
      </Panel>

      <Logo text="Main container" />
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
