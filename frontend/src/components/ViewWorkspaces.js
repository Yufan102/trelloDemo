import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ViewWorkspaces(props) {
    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Workspaces</Typography>
            <Grid container spacing={2}>
                {props.workspaces.map((workspace) => {
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={4} key={workspace.id}>
                            <Card elevation={6}>
                                <CardContent>
                                    <Link to={'/boards/'+workspace.id}><Typography component='h4' variant='h4'>
                                        {workspace.name}
                                    </Typography></Link>
                                    <Link to={'/deleteworkspace/'+workspace.id}><Typography component='button' variant='button'>
                                        Delete
                                    </Typography></Link>
                                    <Link to={'/addmember/'+workspace.id}><Typography component='button' variant='button'>
                                        Add an member by email
                                    </Typography></Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default ViewWorkspaces;