import { Button } from './components/ui/button'
import Card from './components/ui/card/card'
import Header from './components/ui/header/header'
import Input from './components/ui/input/input'

function App() {
  return (
    <div>
      <Header isAuth={true} />
      {/*  <div>
        <a href={'http://localhost:5173/hello'}>Link</a>
      </div>
      <Button as={'a'} href={'http://localhost:5173/hello'}>
        Link
      </Button> */}
      <Input
        isSearch={true}
        type={'text'}
        label={'Input'}
        placeholder={'Input'}
        error={false}
        isDisabled={true}
      />

      <Card>Card</Card>
    </div>
  )
}

export default App
