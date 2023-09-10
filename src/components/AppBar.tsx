import * as React from 'react';
import { Link } from 'gatsby';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';

const pages = [{
    text: 'О проекте',
    url: '/'
}, {
    text: 'О Модулях',
    url: '/#modules'
},
//  {
//     text: 'Об экспертах',
//     url: '/adepts'
// },
 {
    text: 'О нас',
    url: '/contacts'
}, {
    text: 'О будущем',
    url: '/about'
}];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar 
            sx={{ 
                background: {
                    xs: 'transparent',
                    md: 'white'
                },
                position: {
                    xs: 'fixed',
                    md: 'relative'
                },
                top: {
                    xs: '10px',
                    md: '0'
                },
                boxShadow: 'none'
             }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ 
                        flexGrow: 1,
                        margin: '0 auto',
                        justifyContent: 'space-around',
                        display: { 
                            xs: 'none', 
                            md: 'flex' 
                        }
                    }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page.url + index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                <Link to={page.url} style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: '700',
                                    fontSize: '22px',
                                    textTransform: 'lowercase',
                                    textDecoration: 'none'
                                }}>{page.text}</Link>
                            </Button>
                            ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            id="menu-burger"
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                            sx={{
                                background: 'white',
                                borderRadius: '50%',
                            }}
                            >
                            <MenuIcon style={{zIndex: 2}} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            variant="menu"
                            sx={{ display: { xs: 'block', md: 'none' } }}>
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'white'
                            }}>
                                <IconButton
                                    id="menu-burger"
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleCloseNavMenu}
                                    color="black"
                                    sx={{
                                        background: 'white',
                                        borderRadius: '50%',
                                        margin: '24px'
                                    }}
                                    >
                                    <CloseIcon />
                                </IconButton>
                                {pages.map((page, index) => (
                                    <MenuItem 
                                        key={page.url + index} 
                                        onClick={handleCloseNavMenu}
                                        style={{width: '100%', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Link to={page.url}
                                        style={{
                                            textDecoration: 'none'
                                        }}>
                                            <Typography 
                                                textAlign="center"
                                                style={{
                                                    fontFamily: 'var(--font-sans)',
                                                    fontWeight: '700',
                                                    fontSize: '52px',
                                                    textTransform: 'lowercase',
                                                    
                                                }}>
                                                    {page.text}
                                                </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </div>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
