export const isLogggedIn=()=>{
    let data = localStorage.getItem("data")
    if(data == null){
      return false;
    }
    else{
      return true;
    }
  };
  
  //doLogin=> data we pass will be set to local storage
  
  export const doLogin=(data, next)=>{
      localStorage.setItem("data",JSON.stringify(data))
      next()
  };
  
  //doLogout=> data will be removed from local storage
  
  export const doLogout=(next)=>{
      localStorage.removeItem("data")
      next()
  };
  
  // get currentUser
  export const getCurrentUserDetail=()=>{
      if(isLogggedIn()){
          return JSON.parse(localStorage.getItem("data")).client;
      }
      else{
          return undefined;
      }
  };