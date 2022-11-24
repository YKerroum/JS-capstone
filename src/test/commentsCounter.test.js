import commentCounter from "../modules/commentsCounter.js"


describe('Tests on comments counter',()=>{



    test('Given a popup which contains 3 comments the module should return Comments(3) in inner text of the header h3',()=>{
       //Arrange
       
       document.body.innerHTML += `<h3 id="commentCounter"></h3>
       <div id="popComment">
       <p></p>
       <p></p>
       <p></p>
       </div>`

       //Act
       commentCounter();
       const headerComments=document.getElementById('commentCounter').innerHTML;
       //Assets

       expect(headerComments).toBe('Comment(3)');
    })


    test('Given a popup which contains 0 comments the module should return Comments(0) in inner text of the header h3',()=>{
       //Arrange
       
       document.body.innerHTML = `<h3 id="commentCounter"></h3>
       <div id="popComment">
       </div>`

       //Act
       commentCounter();
       const headerComments=document.getElementById('commentCounter').innerHTML;
       //Assets

       expect(headerComments).toBe('Comment(0)');
    })

    test('Given a popup which contains 10 comments the module should return Comments(10) in inner text of the header h3',()=>{
       //Arrange
       
       document.body.innerHTML = `<h3 id="commentCounter"></h3>
       <div id="popComment">
       <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
       </div>`

       //Act
       commentCounter();
       const headerComments=document.getElementById('commentCounter').innerHTML;
       //Assets

       expect(headerComments).toBe('Comment(10)');
    })




})