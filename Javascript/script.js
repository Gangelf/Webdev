
//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var bolFirstName = false;
  var bolProp = false;
  strFirstName = ""
  for(i = 0; i < contacts.length; i++){    
    if(contacts[i].firstName == firstName){
      bolFirstName = true;
      strFirstName = contacts[i].firstName;
    }
  }   
    if(!bolFirstName)
      return "No such contact";

  for(j = 0; j < contacts.length; j++){
    if(contacts[j].hasOwnProperty(prop) && (bolFirstName && contacts[j].firstName == strFirstName){
        bolProp = true;
        if(bolProp && bolFirstName){
          return contacts[j][prop];
        }
    }
  }   
  
  if(!bolProp) 
    return "No such property";

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Sherlock", "likes");
