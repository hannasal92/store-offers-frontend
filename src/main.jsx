import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StoreProvider } from './store/storeProvider.jsx'

localStorage.setItem('userId',1)

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider>
    <App />
    </StoreProvider>
)
