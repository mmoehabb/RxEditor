import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import ViewContent from "./pages/ViewContent/ViewContent";
import CreateContent from "./pages/CreateContent/CreateContent";
import DataContext from "./DataManager/Context";

function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateContent" element={<CreateContent />} />
          <Route path="/ViewContent" element={<ViewContent />} />
        </Routes>
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
