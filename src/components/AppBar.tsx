import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
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
    url: '404'
}, {
    text: 'События',
    url: '/'
}, {
    text: 'Модули',
    url: '#modules'
}, {
    text: 'Концепция',
    url: '/'
}, {
    text: 'Авторы',
    url: '/'
}, {
    text: 'Контакты',
    url: '/'
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
            <AppBar position="static" sx={{ background: 'var(--color-code-bg)' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: { xs: 1, md: 0 }}}>
                            <StaticImage
                                src="../images/logo.png"
                                loading="eager"
                                width={64}
                                quality={95}
                                formats={["auto", "webp"]}
                                alt="Арт-резиденция"
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                    <Button
                                        key={page.url}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'black', display: 'block' }}
                                        >
                                        {page.text}
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
                                sx={{
                                display: { xs: 'block', md: 'none' },
                                }}
                                >
                                {pages.map((page) => (
                                    <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.text}</Typography>
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