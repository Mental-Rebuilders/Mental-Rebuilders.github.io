// import logo from './logo.svg';
// import './App.css';
import { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import styled from 'styled-components';

const Content = lazy(() => importMDX('./Content.mdx'));

const colorMajor = '#fc7ab7';
const colorMinor = '#fff';
const colorFont = '#5c062e';
const defaultFontSize = '20px';
const lineHeight = 2;
const paraSpacing = '3em';
const contentMaxWidth = '800px';
const breakpoint = parseFloat(contentMaxWidth) + 50 + 'px';
const slightlyReducedFontSize = parseInt(defaultFontSize) * 0.9 + 'px';

const AppContainer = styled.div`
  box-sizing: border-box;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  line-height: ${lineHeight};
  font-size: ${defaultFontSize};
  background-color: ${colorMajor};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  margin: 0;
  justify-content: center;
  justify-items: center;
  flex: 1 1 auto;
  @media (min-width: ${breakpoint}) {
    padding: 3em 0em 4em;
  }
`;

const ContentPanel = styled.main`
  min-height: 100vh;
  background-color: ${colorMinor};
  color: ${colorFont};
  overflow-wrap: break-word;
  padding: 1em 1em 1.5em;
  max-width: ${contentMaxWidth};

  @media (min-width: ${breakpoint}) {
    border-radius: 0.25em;
  }

  & p {
    margin-bottom: ${paraSpacing};
  }

`;

const NoteSection = styled.section`
  font-size: ${slightlyReducedFontSize};
`;

const CheckBackLaterLink = styled.a`
  &, &:visited, &:hover, &:active {
    color: #62cb19;
    text-decoration: none;
    display: block;
  }
`;

function App() {
  return (
    <AppContainer>
      <ContentPanel>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Content />
        </Suspense>
        <NoteSection>Blog and Social Network are currently being built. Check back later for updates<br /><CheckBackLaterLink target="_blank" href="https://github.com/Mental-Rebuilders">Return to organization home page</CheckBackLaterLink>
        </NoteSection>
      </ContentPanel>
    </AppContainer>
  );
}

export default App;
