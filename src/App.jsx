import CoffeeForm from './components/CoffeeForm.jsx'
import Hero from './components/Hero.jsx'
import Layout from './components/Layout.jsx'
import Stats from './components/Stats.jsx'

function App() {

const isAuthenticated = false

const authenticatedContent = (
  <>
    <Stats />
    <History />
  </>
)

  return (
    <Layout>
      <Hero />
      <CoffeeForm />
      {isAuthenticated && (authenticatedContent)}
    </Layout>
  )
}

export default App
