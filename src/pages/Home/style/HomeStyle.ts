const getStyle = () => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        color: '#fff',
        fontFamily: 'Pangolin',
        background: 'linear-gradient(#3BAFB7, #4EAED7)',
    },

    animContainer: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },

    illustration: {
        position: 'absolute',
        width: '10em',
        right: '2em',
        bottom: '-10px',
    },

    githubIcon: {
        position: 'absolute' as 'absolute',
        width: '4em',
        left: '1em',
        bottom: '1em',
        zIndex: 3,
    }
});

export default getStyle;