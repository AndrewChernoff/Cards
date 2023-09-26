import { Button } from './components/ui/button'

function App() {
  return (
    <div>
      <div>
        <a href={'http://localhost:5173/hello'}>Link</a>
      </div>
      <Button as={'a'} href={'http://localhost:5173/hello'}>
        Link
      </Button>
    </div>
  )
}

export default App
