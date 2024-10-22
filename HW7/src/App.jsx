import LangSwitcher from "./LangSwitcher";
import { LanguageProvider } from "./LanguageContext";
import Text from "./Text";

function App() {

  const style = {
    margin : "0 auto",
    color: "#5e69ee",
    border: "1px solid black",
    borderRadius: "8px",
    width: "fit-content",
    padding: "20px",
    
  }
  return (
    <div style={style}>
    <LanguageProvider>
      <Text />
      <LangSwitcher />
    </LanguageProvider>
    </div>
  );
}

export default App;