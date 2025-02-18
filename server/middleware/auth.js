import jwt from "jsonwebtoken";


export const verifyToken=async(req,res,next)=>{
    try {
        const token=req.header("Authorization")
        if(!token){
            return res.status(403).send("Access denied");
        }
        if(token.startWith("Bearer")){
            token=token.slice(7 ,token.length).trimleft();
        }
        const verified=jwt.verify(token,process.env.SECRET_KEY);
        req.user=verified;
        next();

    }catch(error){
        res.status(500).json({error:error.message});
    }
}