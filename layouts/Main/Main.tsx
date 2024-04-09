import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from '../../components/Container';

import { Topbar, Sidebar, Footer } from './components';

import pages from '../navigation';


// @ts-ignore
const Main = ({ children, hideMenu = false, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
          {/* eslint-disable-next-line react/no-children-prop */}
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'} children={undefined}>

        </Container>
      </Box>

              <AppBar
                position={'sticky'}
                sx={{
                  top: 0,
                  backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
                }}
                elevation={trigger ? 1 : 0}
              >
                <Container paddingY={1}>
                  <Topbar
                    onSidebarOpen={handleSidebarOpen}
                    pages={pages}
                    colorInvert={trigger ? false : colorInvert}
                    hideMenu={hideMenu}
                  />
                </Container>
              </AppBar>
              <Sidebar
                onClose={handleSidebarClose}
                open={open}
                variant="temporary"
                pages={pages}
              />

      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};


export default Main;
