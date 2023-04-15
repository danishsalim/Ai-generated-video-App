import { createRoot } from "react-dom/client";
import ImageUpload from "./components/ImageUpload";
import TextToSpeech from "./components/TextToSpeech";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/header";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="partition">
        <ImageUpload />
        <TextToSpeech />
        </div>
      </Provider>
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
