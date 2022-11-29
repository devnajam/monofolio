import { styled } from '../../theme/stitches.config';

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Brand = styled('h1', {
  fontSize: '24px',
  fontWeight: 700,
  fontFamily: 'Mulish',
});

const LinksContainer = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
  color: '#7D7987',
  fontFamily: 'Mulish',
  gap: '40px',
});

const Link = styled('li', {
  cursor: 'pointer',
  transition: 'all .2s',
  '&:hover': {
    color: '#1F1534',
  },
});

export function Header() {
  return (
    <HeaderContainer>
      <Brand>Trafalgar</Brand>
      <LinksContainer>
        <Link>Home</Link>
        <Link>Find a doctor</Link>
        <Link>Apps</Link>
        <Link>Testimonials</Link>
        <Link>About us</Link>
      </LinksContainer>
    </HeaderContainer>
  );
}
