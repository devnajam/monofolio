import { Header } from '../Header';
import { globalCss, styled } from '../../theme/stitches.config';

const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',
  },
});

const AppContainer = styled('div', {
  padding: '40px 140px',
});

export function HealthAppContainer() {
  globalStyles();

  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}
