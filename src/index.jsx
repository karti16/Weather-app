import { createRoot } from 'react-dom/client';
import './styles/main.css';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
