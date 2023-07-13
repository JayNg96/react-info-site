import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PageContent } from './PageContent.js';

function Page() {
    return (
        <div>
            <Header/>
            <PageContent/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page/>)