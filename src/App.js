import { Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from './pages/Home'
import Reports from './pages/Reports'

function App() {
  return (
    <div >
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/reports" exact component={Reports} />
      </Layout>
    </div>
  );
}

export default App;