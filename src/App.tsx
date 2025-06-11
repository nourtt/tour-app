import { Provider } from "react-redux"
import { TourPage } from "./pages/TourPage"
import { store } from "./app/store"
import { ConfigProvider } from "antd"

function App() {

  return (
    <Provider store={store}>
      <ConfigProvider>
        <TourPage />
      </ConfigProvider>
    </Provider>
  )
}

export default App
