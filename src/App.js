import './App.css';
import DndTableview from './views/DndTableview';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DndProvider backend={HTML5Backend}>
          <DndTableview />
        </DndProvider>
      </header>
    </div>
  );
}

export default App;
