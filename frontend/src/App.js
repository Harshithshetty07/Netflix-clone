import Body from "./components/Body";
import { Toaster } from 'react-hot-toast'; 
import MovieDialog from "./components/MovieDialog";
import DashBoard from "./components/DashBoard";
 
function App() {
  return (
    <div>
      <DashBoard/>
       <Toaster/>  
       <MovieDialog/>
    </div>
  );
}

export default App;
