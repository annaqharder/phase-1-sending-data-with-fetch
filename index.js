// Add your code here

// WITH error: 
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

// withOUT error: 
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });






// defining variables 

// const data = {
//     name,
//     email,
// }



// writing the function submitData

function submitData(name, email) {
    const returnFetch = fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name, 
            email
        }), 
    })

    .then(function (response) {
        return response.json(); 
    })
    .then(function (object) {
        document.body.innerHTML = object["id"];
    })
    // .catch(function (error) {
    //     alert('Error Occured'); 
    //     console.log(error.message)
    // })
return returnFetch

}
submitData()

