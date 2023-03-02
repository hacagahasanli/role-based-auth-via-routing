import styled from "styled-components"
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'

const App = () => {
  return (
    <Container>
      <RouterProvider {...{ router }}>
      </RouterProvider>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
