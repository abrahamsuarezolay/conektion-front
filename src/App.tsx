import { LanguageProvider } from './context/LangContext'
import Home from './layout/home/Home'
import BaseRoutes from './routes/BaseRoutes'

function App() {

  return (
    <div className='app-container'>
      <LanguageProvider>
        <BaseRoutes />
      </LanguageProvider>
    </div>
  )
}

export default App
