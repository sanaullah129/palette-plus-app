import titleBackground from '../constants/background.svg'
import background from '../constants/about-us-background.svg'

const styles = {
    title: {
        margin: "0 0 10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        /* background by SVGBackgrounds.com */
        backgroundColor: '#394bad',
        backgroundImage: `url(${titleBackground})`,
        '& h4': {
          color: 'white',
        },
        '& a': {
            textDecoration: "none",
            color: 'white'
          },
    },
    content: {
        padding: "0 20px 10px",
        textAlign: "center",
        '& p': {
            fontSize: "18px"
        },
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
        padding: '20px',
    },
    section: {
        height: "400px",
        borderRadius: "18px",
        /* background by SVGBackgrounds.com */
        backgroundColor: '#394bad',
        backgroundImage: `url(${background})`,
        '& h2':{
            textAlign: "center",
            color: "white"
        }   
    }
}

export default styles;