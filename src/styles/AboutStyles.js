import sizeReferences from '../constants/sizes';
import rootBackground from '../constants/root-background.svg';
import titleBackground from '../constants/background.svg'

const styles = {
    root:{
        backgroundImage: `url(${rootBackground})`
    },
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
          textAlign:"center"
        },
        '& a': {
            textDecoration: "underline",
            color: 'white'
          },
          [sizeReferences.down("md")]:{
            "& h4":{
                fontSize: "26px"
            }
        }
    },
    content: {
        padding: "0 20px 10px",
        textAlign: "center",
        '& p': {
            fontSize: "18px",
            fontWeight: "700"
        },
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        padding: '20px',
        placeItems: 'center',
        [sizeReferences.down("md")]:{
            gridTemplateColumns: '1fr',
        }
    },
    useCase: {
        height: "400px",
        width: "500px",
        borderRadius: "18px",
        /* background by SVGBackgrounds.com */
        background: 'linear-gradient(135deg, #394bad 0%, #4cb2f5 100%);',
        '& h2':{
            textAlign: "center",
            color: "white"
        },
        [sizeReferences.down("md")]:{
            width: "100%",
            height: "450px"
        }
    },
    lists: {
        fontSize: "16px",
        alignItems: "center",
        display: "flex",
        justifyContent: "start",
        color: "#d4d8d9",
        fontWeight: "700",
        textAlign: "justify",
        '& li':{
            marginRight: "20px"
        }
    },
    social: {
        height: "400px",
        width: "500px",
        borderRadius: "18px",
        /* background by SVGBackgrounds.com */
        background: 'linear-gradient(135deg, #394bad 0%, #4cb2f5 100%);',
        '& h2':{
            textAlign: "center",
            color: "white"
        },
        [sizeReferences.down("md")]:{
            width: "100%",
            height: "450px"
        }
    },
    socialProfile:{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        padding: "0px 10px 0px 10px",
        '& a': {
            textDecoration: "none",
            color: '#d4d8d9'
        },
        '& img': {
            height: "50px",
            width: "50px"
        },
        fontWeight: "700",
        color: "#d4d8d9"
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        padding: "8px",
        justifyContent: "space-evenly"

    },
    aboutDescription: {
        fontSize: "14px",
        color: "#d4d8d9",
        padding: "10px",
        textAlign: "justify",
        fontWeight: "750"
    }
}

export default styles;