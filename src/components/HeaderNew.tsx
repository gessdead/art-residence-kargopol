import * as React from 'react';

import ResponsiveAppBar from './AppBar';

const Header = ({ withoutAppBar }) => !withoutAppBar && <ResponsiveAppBar />

export default Header;
