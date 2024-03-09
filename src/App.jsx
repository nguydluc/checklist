import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Form />
        <CheckList />
      </Main>
      <Footer />
    </>
  );
}
