import * as React from 'react';
import { Link } from 'gatsby';
import ResponsiveAppBar from './AppBar';

const navData = [{
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
}]

const Header = ({ siteTitle }) => (
        <header
            style={{
                margin: `0 auto`,
                width: `100%`
        }}>
        
        <ResponsiveAppBar />
        </header>
        )

export default Header;
