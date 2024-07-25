import jwt from 'jsonwebtoken'
import config from '../config/config.js';


const private_key = config.PRIVATE_KEY

// export function verifyToken(req, res, next) {
//   //console.log("header------------",req.headers.authorization);
//   //console.log(req.headers)
//   const token = req.cookies.access_token;
//   console.log("cokkies token :", token)
//   if (!token) {
//     return res.status(401).json({error:"You are not authenticated!"}) ;
//   }
//   // const decoded = jwt.verify(token, private_key);
//   jwt.verify(token, private_key, (err, user) => {
//     if (err) return res.status(403).json({error:"Token is not valid"});
//     req.user = user;
//     next();
 
//   });
// }

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res,next, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };


export function verifyToken(req, res, next) {
  //console.log("header------------",req.headers.authorization);
  //console.log(req.headers)
  const token = req.headers.authorization.split(" ")[1]
  //console.log("cookiesss token:::", token)
  if (!token) {
    return res.status(401).json({error:"You are not authenticated!"}) ;
  }
  // const decoded = jwt.verify(token, private_key);
  jwt.verify(token, private_key, (err, user) => {
    if (err) return res.status(403).json({error:"Token is not valid"});
    req.user = user;
    next();
 
  });
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if (decode.role == "dean") {
      next();
    } else {
      return res.status(401).json({error:"You are not authenticated!"}) ;
    }
  });
};
export const verifyAdminAndDoctor = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if (decode.role == "doctor" || "dean") {
      next();
    } else {
      return res.status(401).json({error:"You are not authenticated!"}) ;
    }
  });
};
export const verifyByAll = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if (decode.role == "doctor" || "dean" || "receptionist") {
      next();
    } else {
      return res.status(401).json({error:"You are not authenticated!"}) ;
    }
  });
};