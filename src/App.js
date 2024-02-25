import Pages from "./pages/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  console.log("App component")
  return (
    <div>
       <ChakraProvider>
      <Pages />
       </ChakraProvider>
    </div>
  );
}

export default App;
