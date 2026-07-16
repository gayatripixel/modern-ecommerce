import { create } from "zustand";
import { persist } from "zustand/middleware";


const useAuthStore = create(

persist(

(set,get)=>({

users:[],

user:null,



register:(userData)=>{


const existingUser = get().users.find(
(user)=>user.email === userData.email
);


if(existingUser){

return false;

}



set((state)=>({

users:[
...state.users,
userData
]

}));


return true;


},





login:(email,password)=>{


const user = get().users.find(

(user)=>
user.email === email &&
user.password === password

);



if(user){


set({

user

});


return true;


}



return false;


},






logout:()=>{


set({

user:null

});


},





}),


{

name:"auth-storage"

}

)


);


export default useAuthStore;