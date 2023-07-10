import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
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

const pages = [{
    text: 'О проекте',
    url: '/'
}, {
    text: 'О Модулях',
    url: '/#modules'
}, {
    text: 'Об экспертах',
    url: '/adepts'
}, {
    text: 'О нас',
    url: '/contacts'
}, {
    text: 'О будущем',
    url: '/contacts'
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
            //position='relative' 
            sx={{ 
                background: 'white',
                position: {
                    sx: 'fixed',
                    md: 'relative'
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
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                            >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                            vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}>
                            {pages.map((page, index) => (
                                <MenuItem key={page.url + index} onClick={handleCloseNavMenu}>
                                    <Link to={page.url}>
                                    <Typography textAlign="center">{page.text}</Typography>
                                    </Link>
                                </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        );
}
export default ResponsiveAppBar;
