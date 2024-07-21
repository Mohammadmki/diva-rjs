import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "./configs/reactqueryoptions";
import Lyout from "./components/lyout/Lyout";
import Authpage from "./pages/Authpage";
import Mainpage from "./pages/Mainpage";


function App() {





  const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}> 
  <BrowserRouter>
  <Lyout>
  <Router/>
  </Lyout>
  </BrowserRouter>
    </QueryClientProvider>
 
 
  
  )
}

export default App;
