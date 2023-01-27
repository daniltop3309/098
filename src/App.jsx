import './App.css';
import Registration from './components/registration';
import List from './components/List';
import Taked from "./components/taked"

function App() {
  return (
    <div>
      <Registration propName={''} propAge={'0'} propEmail={''}/>
          <List />
    </div>
  )
}

export default App;
