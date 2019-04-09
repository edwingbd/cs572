//Exercise 1 Schema Design 
//Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements:
// • Books have an ISBN number and are categorized by author and tagged by keywords to facilitate search
// • Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he 
//      may contact students who are late returning their books. 

const collecBooks={
    ISBN:"123456",
    inventoryCode:'456-123',
    author:[{name:'edwin',age:89},{name:'mendizajo',age:Infinity}],
    title:'text',
    tags:['word1','word2'],
    isborrow:true,
    studentBorrow:{studenID:986924,phone:456789123,email:'edwun@EADDRINUSE.com'},
    dateStartBorrow:'04/01/2019',
    dateReturnBorrow:'04/31/2019'
}

