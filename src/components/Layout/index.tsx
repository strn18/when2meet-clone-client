import { Box } from '@mui/material';

import TopNav from '../TopNav';
import Footer from '../Footer';

/**
 * 이 컴포넌트는 모든 페이지의 레이아웃을 담당합니다.
 * 모든 페이지는 이 컴포넌트 안에 들어갑니다.
 * 모바일처럼 꾸미기 위해서 스타일링 해보았습니다.
 * sx 속성은 mui에서 제공하는 스타일링 속성입니다.(다른 리액트 코드에서는 사용할 수 없습니다!)
 * BottomNav 컴포넌트는 페이지의 하단에 위치하도록 설정했습니다.
 */
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          maxWidth: 1728,
          margin: 'auto',
          '@media (max-width: 600px)': {
            maxWidth: '100vw',
          },
        }}
      >
        <TopNav />
        <Box height="80%" sx={{ backgroundColor: 'ivory' }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
