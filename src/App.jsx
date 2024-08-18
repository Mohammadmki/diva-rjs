
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "./configs/reactqueryoptions";
import Lyout from "./components/layout/Lyout";
import Router from "./router/Router";







function App() {





  const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}> 
  
  <Lyout >
    <Router/>
  </Lyout>
  
    </QueryClientProvider>
 
 
  
  )
}

export default App;
