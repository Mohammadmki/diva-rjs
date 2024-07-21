const setcookie=(tokens)=>{
    document.cookie=`accessToken=${tokens.accessToken}; max-age=${1*24*60*60}`;
    document.cookie=`refreshToken=${tokens.refreshToken}; max-age=${30*24*60*60}`
}

const getcookie=(cookiename)=>{
    
   return document.cookie.split(";").find(token=>token.trim().split("=")[0]==cookiename)
   ?.split("=")[1];
    
}

export{setcookie,getcookie}