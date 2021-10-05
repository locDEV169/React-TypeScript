import { AppBar, Toolbar, Box, Typography, FormControl, Select, MenuItem, Button } from '@material-ui/core'
import React, { ChangeEvent, useState, useEffect } from 'react'
import WelcomeMessage from './WelcomeMessage'
import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    positionSelect: {
        color: 'white',
        borderBottom: '1px solid white'
    }
}))

const Navbar = () => {
    //styles 
    const classes = useStyles();

    //set useState
    const [position, setPosition] = useState('DEV')
    const [time, setTime] = useState(() => new Date(Date.now()))

    //use Effect
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000)

        return () => clearInterval(timer)

    }, [])


    //function
    const onPositionChange = (event: ChangeEvent<{ value: unknown }>) => setPosition(event.target.value as string);

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
                    <Typography variant='h6'>My Movie</Typography>
                    <Box textAlign='center'>
                        <WelcomeMessage position={position} />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    value={position}
                                    onChange={onPositionChange}
                                    className={classes.positionSelect}
                                >
                                    <MenuItem value='DEV'>DEV</MenuItem>
                                    <MenuItem value='PM'>PM</MenuItem>
                                    <MenuItem value='BA'>BA</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign='center'>
                        <Box my={1}>
                            <Typography variant='h6'>
                                {time.toUTCString()}
                            </Typography>
                        </Box>
                        <Button variant='contained'>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
