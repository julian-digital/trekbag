import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import ItemsContextProvider from "../contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
