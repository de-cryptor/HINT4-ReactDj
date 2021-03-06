import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles';

export default withStyles(styles)(({ classes, children }) => (
    <div>
        {children}
    </div>
));