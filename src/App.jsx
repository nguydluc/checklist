import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Footer from "./components/Footer";
import Providers from "./components/providers/Providers";

export default function App() {
  return (
    <Providers>
      <Header />
      <Main>
        <Form />
        <CheckList />
      </Main>

      <Footer />
    </Providers>
  );
}
