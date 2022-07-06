<<<<<<< HEAD
// import React from 'react';
// import { Grid, Card, CardContent, Typography, } from '@mui/material';

// function ViewBoards(props) {
//     return (
//         <section style={{ marginTop: '32px' }}>
//             <Typography variant='h2' component='h2'>Workspaces</Typography>
//             <Grid container spacing={2}>
//                 {props.workspaces.map((workspace) => {
//                     return (
//                         <Grid item xs={12} sm={12} md={4} lg={4} key={workspace.id}>
//                             <Card elevation={6}>
//                                 <CardContent>
//                                     <Typography component='h4' variant='h4'>
//                                         {workspace.name}
//                                     </Typography>
//                                     <Typography component='p' variant='p'>
//                                         {workspace.boards}
//                                     </Typography>
//                                     <Typography component='p' variant='p'>
//                                         {workspace.user_Roles}
//                                     </Typography>
                
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     );
//                 })}
//             </Grid>
//         </section>
//     );
// };
=======
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function ViewBoards(props) {
    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Boards</Typography>
            <Grid container spacing={2}>
                {props.boards.map((board) => {
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={4} key={board.id}>
                            <Card elevation={6}>
                                <CardContent>
                                    <Typography component='h4' variant='h4'>
                                        {board.name}
                                    </Typography>
                                    <Link to={'/deleteboard/'+board.id}><Typography component='button' variant='button'>
                                        Delete
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
>>>>>>> 4acf12f1b8b60398450a0bc71fa3075e9864fde5

// export default ViewBoards;