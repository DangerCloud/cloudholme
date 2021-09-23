import { Paper } from '@material-ui/core';
import React, { FC } from 'react';
import FamilyCards from './familyCards';

const Layout: FC = (props) => (
    <>
        <Paper elevation={2}>
            <FamilyCards></FamilyCards>
            <main>
                {props.children}
            </main>
        </Paper>
    </>
);

export default Layout;
