import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })

    res.cookie("token", token, {
        httpOnly: true, //prevents XSS attacks - so JS can't directly read it : document.cookie
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //prevents CSRF attacks - so that it don't send cookie to  cross-site requests
        maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
    })
    return token;
}