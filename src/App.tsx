import { ClientContext } from 'graphql-hooks'
import client from './common/config/clientConfig'
import ZellerCustomers from './components/ZellerCustomers/ZellerCustomers'

function App() {

  return (
    <div className="max-w-2xl mx-auto px-4 border border-surface min-h-screen">
      <ClientContext.Provider value={client}>
        <ZellerCustomers />
      </ClientContext.Provider>
    </div>
  )
}

export default App
