import { appContext } from '../AppState'
import { useContext } from 'react'
import { RobotProp } from './Robot'

export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProp>
) => {
  return (props: any) => {
    const store = useContext(appContext)
    const addToCart = (id: number, name: string) => {
      if (store.setState) {
        store.setState({
          ...store.state,
          shoppingCartItems: [...store.state.shoppingCartItems, { id, name }],
        })
      }
    }

    return <ChildComponent {...props} addToCart={addToCart} store={store} />
  }
}

export const useAddToCart = () => {
  const store = useContext(appContext)
  const addToCart = (id: number, name: string) => {
    if (store.setState) {
      store.setState({
        ...store.state,
        shoppingCartItems: [...store.state.shoppingCartItems, { id, name }],
      })
    }
  }

  return {
    store,
    addToCart,
  }
}
