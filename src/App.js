import { Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import Reports from './pages/Reports'
import Gards from './pages/Gards'
import Pressure from './pages/Pressure'

function App() {
  return (
    <div >
      <Layout>
        <Route path="/" exact component={Reports} />
        <Route path="/gards" exact component={Gards} />
        <Route path="/pressure" exact component={Pressure} />
      </Layout>
    </div>
  );
}

export default App;