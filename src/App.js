import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';
import './App.css';
import ReactGA from 'react-ga';
import config from './configuration'

ReactGA.initialize(config.googleAnalytics);
ReactGA.pageview(window.location.pathname + window.location.search);

const {Header} = Layout;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexCol)`
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const TextContainer = styled(FlexCol)`
  padding: 0rem;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 100%
`;

const Titlehead = {
    fontWeight: '800',
    fontSize: '25px',
    color: '#FFFFFF'
};

const head = {
    fontWeight: '800',
    fontSize: '25px',
    color: '#393e46'
};


function App() {

    return (
        <div 
          className='App'
          style={{background: config.bodyBackground}}
        >
            <HeaderComponent/>
            <Container>
              <TextContainer>
                <iframe 
                  className="airtable-embed"
                  src={config.airtable}
                  title="airtable"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  style={{
                    background: 'transparent'
                  }}
                />
              </TextContainer>
            </Container>
        </div>
    );
}

const HeaderComponent = ({logout}) => {
    return (
        <Header style={{height: 60, background: config.headerBackground}}>
          <Container>
            <h1 style={Titlehead}>{config.header}</h1>
          </Container>
        </Header>
    );
};

export default App;
