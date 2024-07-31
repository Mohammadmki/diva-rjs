
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { defaultOptions } from "./configs/reactqueryoptions";
import Lyout from "./components/layout/Lyout";
import Router from "./router/Router";
import { myPosts } from "./servises/user";


function App() {





  const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}> 

  <Lyout>
    <Router/>
  </Lyout>
 
    </QueryClientProvider>
 
 
  
  )
}

export default App;
