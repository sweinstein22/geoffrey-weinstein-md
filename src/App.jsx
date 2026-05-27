import waves from './assets/waves.svg'
import './App.css'
import {Tabs, TabList, Tab, TabPanels, TabPanel} from './Tabs';
import EOL from './EOL';
import About from './About';
import More from './More';
import { useSearchParams } from 'react-router';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'EOL';
  const handleSelectionChange = (key) => {
    setSearchParams({ tab: String(key) }, { replace: true });
  };

  return (
    <div id="center">
      <section id="hero">
        <div className="waves">
          <img src={waves} alt="Geoffrey Weinstein, M.D."/>
        </div>
        <div className="title">
          <h1>Compassionate Care At The End Of Life</h1>
          <hr/>
        </div>
      </section>
      <section id="content">
        <div id="main">
          <Tabs orientation="vertical" selectedKey={activeTab} onSelectionChange={handleSelectionChange}>
            <TabList aria-label="Settings">
              <Tab id="EOL">The End of Life Options Act</Tab>
              <Tab id="about">About Geoffrey Weinstein, M.D.</Tab>
              <Tab id="more">How to Find Out More</Tab>
            </TabList>
            <TabPanels>
              <TabPanel id="EOL">
                <EOL/>
              </TabPanel>
              <TabPanel id="about">
                <About/>
              </TabPanel>
              <TabPanel id="more">
                <More/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>
      <section id="footer">
        <p>(858) 424-1732</p>
        <p>Geoffrey.Weinstein.MD@gmail.com</p>
      </section>
    </div>
  )
}

export default App
