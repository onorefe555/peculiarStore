import react from "react"

const books =[
    {
      id: 1,
      img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
      author:"John Marcosh",
      title :"I Love You to the Moon and Back",
    },
    {
      id: 2,
      img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
      author:"charles Gabriel",
      title :"Our Class Is a Family",
    },
    {
      id: 3,
      img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
      author:"Tim Godfred",
      title :"Power of the thought",
    },
    {
      id: 4,
      img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
      author:"Tim Godfred",
      title :"Say no to those who talk behind you",
    },
  ]
const clickHandler =()=>{
alert("this book is written by John Macks")
}

const complexHandler =(author)=>{
<h3>{author}</h3>
}
  function Book(props) {
    const {img, author, title} = props.book
    return(
      <article className="book" onMouseOver={()=>{}}>
         <img src={img}  />
         <h2>{title}</h2>
         <h6>{author}</h6>
         <button type="button" onClick={clickHandler}>Reference</button>
         <button type="button" onClick={()=>{complexHandler(author)}}>More complex example</button>
      </article>
    )
  }
const Blog =(img, title, author)=>{
  return(
    <div className="">
      {books.map((book, index)=>{
        return <div >
          <Book key={book.id} book={book}></Book>  
        </div>
      })}
    </div>
  )
}
export default Blog