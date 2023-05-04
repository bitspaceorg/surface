import jwt from 'jsonwebtoken'

export const authenticateToken = ( req:any ,res:any ,next :any) => {
    const { surface_token } = req.cookies;
    if (surface_token) {
        jwt.verify(surface_token ,"RAHULNAVNEETH-SURFACE" , (err: any, data: any) => {
            if (err) return res.status(401).send("INVALID TOKEN");
            req.user = data;
            next();
        });
    } else {
        res.status(401).send("NOT AUTHENTICATED");
    }
}
