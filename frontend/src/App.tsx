import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import ProjectForm from './components/ProjectForm';
import MainInterface from './components/MainInterface'; // Assuming MainInterface is in the components folder

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <div className="logo" style={{ color: 'white', fontSize: '24px' }}>
            Shapoorji Pallonji Pvt Ltd
          </div>
        </Header>
        <Content style={{ padding: '20px', minHeight: '280px' }}>
          <Routes>
            <Route path="/" element={<ProjectForm />} />
            <Route path="/mainpage" element={<MainInterface />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Shapoorji Pallonji Pvt Ltd ©2025
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
