// Define your Book class here:

// Define your Manual and Novel classes here:

// Declare the objects for exercises 2 and 3 here:

// Code exercises 4 & 5 here:



class Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      this.title = title;
      this.author = author;
      this.copyright = copyright;
      this.isbn = isbn;
      this.pages = pages;
      this.timesCheckedOut = timesCheckedOut;
      this.discarded = discarded;
   }

   checkout(uses=1) {
      this.timesCheckedOut += uses;
   }
}

class Manual extends Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
   }

   dispose(currentYear){
      if (currentYear-this.copyright > 5) {
         this.discarded = 'Yes';
      }
   }
}

class Novel extends Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
   }

   dispose(){
      if (this.timesCheckedOut > 100) {
         this.discarded = 'Yes';
      }
   }
}


let classicRomanceNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 2, 'No'); 

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

makingTheShip.dispose(2024); 
classicRomanceNovel.checkout(5); 

console.log(makingTheShip) 
console.log(classicRomanceNovel);


