import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "./configs/reactqueryoptions";
import Lyout from "./components/layout/Lyout";


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
