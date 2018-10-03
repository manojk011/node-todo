var logger = require('logger').createLogger();

//validateToken = (req, res) => {
validateToken = (jwttoken)=>{
    return new Promise((resolve, reject) => {
      var token = require('jsonwebtoken');
    //var jwt = req.headers['token'];
      let jwt = jwttoken
      let tempClientId;
      if (jwt == null || jwt == '') {
        resolve("Error: Token was not provided by the client");
        
      }
    
       
        if(verifyToken(jwt)){
          //console.log(token.decode(jwttoken, { complete: true }))
          resolve(token.decode(jwttoken, { complete: true }))  
        }else{
          reject("invalid Token!")
        }
      
    })
      
  };

  function verifyToken(token) {
    var boolVal;
    var jwt = require('jsonwebtoken');
  
    var decoded = jwt.decode(token, { complete: true });
    if (decoded != null){
      var tokenExpiration = new Date(decoded.payload.exp * 1000);
      if (new Date().getTime() > tokenExpiration) {
        logger.info("KPOAuthAPI-502 - Token Expired at " + tokenExpiration);
        return false;
      }
    
      logger.info("ALGG---" + decoded.header.alg);
      if (decoded.header.alg == 'RS256') {
        boolVal = verifyRS256(token);
        return boolVal;
      } else {
        boolVal = verifyHS256(token);
        return boolVal;
      }
    }else{
      return false;
    }  
  };
  
  function verifyRS256(token) {
    var result;
    var pCert = getPrimaryCert();
    var sCert = getSecondaryCert();
  
    if (certValidation(pCert, token) == true) {
      return true;
  
    } else if (certValidation(sCert, token) == true) {
      return true;
  
    } else {
      return false;
    }
  
  };
  
  function certValidation(cert, token) {
    console.log(cert)
    logger.info("cert start ---");
    var result;
    var jwt = require('jsonwebtoken');
    var fs = require('fs');
  
    if (cert == null || cert.lenght <= 0) {
      logger.info("KPOAuthAPI-501: Primary Cert is not provided");
      //res.send("KPOAuthAPI-501: Primary Cert is not provided");
      //result = false;
      return false;
    }
  
    jwt.verify(token, cert, { algorithms: ['RS256'] }, function (err, payload) {
      if (err) {
        if (JSON.stringify(err).includes('PEM_read_bio:no start line') == true) {
          console.log("KPOAuthAPI-999 - Certificate provided is not valid.");
        }
        console.error(err);
        result = false;
        //return false;
      } else {
        logger.info("payload-->" + payload.client_id);
        result = true;
        
        var decoded = jwt.decode(token, { complete: true });
        //kpCache.setTokenExpirationTime(new Date(decoded.payload.exp * 1000));
      }
    });
    return result;
  };
  
  function verifyHS256(token) {
    var result;
    var jwt = require('jsonwebtoken');
    var fs = require('fs');
    try {
      var decoded = jwt.verify(token, 'z4YMxJ2aYzVNHoMaLQsubGFmleBoXjTHkOWfk2ppzKJMntS4v2kqqrEIQx6m1g6eIqG5i5ZpvORSUsSrLErWWQJuwLpp6JfLC8GP8ByC2CCrb3r20NXMO5ZTkvIvWYex');
      
      result = true;
    } catch (err) {
      logger.info(err);
      result = false;
    }
    return result;
  }

  function getPrimaryCert(){
    return "publicKey=-----BEGIN%20PUBLIC%20KEY-----%0AMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdlatRjRjogo3WojgGHFHYLugd%0AUWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0%2FgCFQs%0AHUfQrSDv%2BMuSUMAe8jzKE4qW%2BjK%2BxQU9a03GUnKHkkle%2BQ0pX%2Fg6jXZ7r1%2FxAK5D%0Ao2kQ%2BX5xK9cipRgEKwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  }
 
  function getSecondaryCert(){
    return "qwertyuiopasdfghjklzxcvbnm123456your-256-bit-secret"
  }
 
  //let Tresult = validateToken("yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYWlzZXIiLCJpYXQiOjE1MzgwODIyMDUsImV4cCI6MTUzODA4NDMwNSwiYXVkIjoiIiwic3ViIjoibWFub2pAZXhhbXBsZS5jb20iLCJuYW1lIjoibWFub2oiLCJudWlkIjoiUzIwMjI4NiIsIlJvbGUiOiJhZG1pbiJ9.4-Qbd8Asy2fabmXsQEZD_XBkI7bjB3fZTpFKmPEYdPQ");
  let Tresult = validateToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM");
  Tresult.then((result) => {
    console.log(result.payload)
  }).catch((err)=>{
    console.log(err)
  })
  //eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM