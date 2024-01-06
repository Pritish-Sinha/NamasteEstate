import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-t2uh1ay4qp5l5kla.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck