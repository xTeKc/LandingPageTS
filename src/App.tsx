import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import background from './assets/landing-page-bg.svg';
import logo from './assets/dapp-logo.svg';
import discord from './assets/discord.svg';
import github from './assets/github.svg';
import docs from './assets/docs.svg';
import twitter from './assets/twitter.svg';
import useYourDapp from './assets/use-YourDapp.svg';
import './App.css';
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import {
  dappUrl,
  discordUrl,
  docsUrl,
  githubUrl,
  twitterUrl
} from './links'

const useStyles = makeStyles(() => ({
  background: {
    zIndex: -1,
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    height: '200%',
    width: '200%'
  },
  container: {
    height: '100vh',
    width: '100%'
  },
  logo: {
    width: '24rem'
  },
  link: {
    margin: '1.8rem',
    width: '3.5rem',
    opacity: '35%',
    '&:hover': {
      opacity: '70%'
    }
  },
  links: {
    marginLeft: '0.4rem',
    position: 'absolute',
    bottom: '2.4rem'
  },
  useYourDapp: {
    height: '5.0rem'
  },
  appButton: {
    marginTop: '5.6rem',
    borderRadius: '3.0rem',
    padding: 0,
    height: '5.0rem',
    '&:hover': {
      background: 'rgba(247, 189, 181, 0.05)'
    }
  }
}))

function App() {
  const styles = useStyles()

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <img src={background} className={styles.background} alt="logo" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={styles.container}
        >
        <img src={logo} className={styles.logo} alt="DApp Logo" />
          <Link
            href={dappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.appButton}
          >
            <img src={useYourDapp} className={styles.useYourDapp} alt="'Use DApp' - Button (Link to DApp Website)" />
          </Link>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            className={styles.links}
          >
            <Link
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discord} className={styles.link} alt="Discord Logo (Link)" />
            </Link>
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className={styles.link} alt="Twitter Logo (Link)" />
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className={styles.link} alt="Github Logo (Link)" />
            </Link>
            <Link
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={docs} className={styles.link} alt="Docs Logo (Link)" />
            </Link>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;