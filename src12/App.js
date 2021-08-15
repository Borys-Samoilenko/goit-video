import React from 'react';
// import Logo from './components/Logo';
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
// import Container from './components/Container/Container';
// import AppBar from './components/AppBar/AppBar';
import Layout from './components/Layout/Layout';

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
    <Layout>
      <ColorPicker options={colorPickerOptions} />
      <Notification text="CSS-modules" />
      <Notification text="Error" type="error" />
      <Panel title="Latest news">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <a href="https://reactjs.org">Read more...</a>
      </Panel>

      <Panel>
        <p>Porro magni laundatium aspernatur debitis deserunt ipsam</p>
      </Panel>

      <PaintingList paintings={paintings} />
    </Layout>
  );
};

export default App;
