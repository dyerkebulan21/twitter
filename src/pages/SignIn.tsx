import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    },
    loginSideTwitterIcon: {
        fontSize: 45,
        
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 800,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    }
}))


function SignIn() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <ul> 
                    <li>
                        <Typography>Читайте о том что вам интересно</Typography>
                    </li> 
                </ul>
                <ul>
                    <li>
                    <Typography>Узнайте о чем говорят в мире</Typography>
                        </li>
                </ul>
                <ul>
                    <li>
                    <Typography> Присоединяйтесь к общению </Typography>
                        </li>
                </ul>
            </div>
            <section className={classes.loginSide}>
               <div className={classes.loginSideWrapper}>
               <TwitterIcon className={classes.loginSideTwitterIcon} color="primary"/>
                <Typography gutterBottom variant="h4" className={classes.loginSideTitle}>Узнайте что происходит в мире прямо сейчас</Typography>
                <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас</b></Typography>
                <br/>
           
                 <Button style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                 <Button variant="outlined" color="inherit" fullWidth>Войти</Button>
             
               </div>
            </section>
        </div>
    )
}

export default SignIn
