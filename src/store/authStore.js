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

console.log("Logged User:", user);

if(user){


set({


user


});


return true;


}




return false;


},

resetPassword: (email, newPassword) => {

  const user = get().users.find(
    (user) => user.email === email
  );

  if (!user) {

    return false;

  }

  set((state) => ({

    users: state.users.map((item) =>

      item.email === email

        ? {
            ...item,
            password: newPassword
          }

        : item

    )

  }));

  return true;

},

updateProfile: (updatedData) => {

  set((state) => ({

    user: {
      ...state.user,
      ...updatedData,
    },

    users: state.users.map((u) =>
      u.email === state.user.email
        ? { ...u, ...updatedData }
        : u
    ),

  }));

},


logout:()=>{


set({

user:null

});


},


isAuthenticated: () => {

  return get().user !== null;

},


}),


{

name:"auth-storage"

}

)


);


export default useAuthStore;