import ReactDOM from 'react-dom/client';
import './index.css';

const navEl = (
  <nav>
      <h1>myWebsite</h1>
      <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(navEl)

