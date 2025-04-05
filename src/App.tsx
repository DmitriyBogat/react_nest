import { Suspense } from "react";
import PublicRoutes from "routes/PublicRoutes";
import PrivateRoutes from 'routes/PrivateRoutes'
import { AppStyles, Footer } from "App.styled";

import Header from "features";
export const App = () => {
  return <>
    <AppStyles />
   
    <Header/>
    <Suspense fallback={'Loading...'}>
        <PublicRoutes/>
        {/* <PrivateRoutes/> */}
    </Suspense>
    <Footer>
      <div>Маркетплейс</div>
    </Footer>

  </>
}

export default App;
