import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { Cursor } from './components/Cursor';
import { useActiveSection } from './hooks/useActiveSection';


function App() {
  const activeSection = useActiveSection();
  
  return (
    // className="min-h-screen bg-navy-900 text-white "
    <div className="min-h-screen bg-zinc-950 text-white ">
      <Cursor />
      <Navigation activeSection={activeSection} />
      <Content />
    </div>
  );
}

export default App;