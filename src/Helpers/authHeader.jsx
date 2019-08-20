export function authHeader(){
    let data=JSON.parse(localStorage.getItem('data'))
    if(data && data.data.id){
        return { 'Authorization':data.data.id };    
    }
    else{
        return {};
    }
}