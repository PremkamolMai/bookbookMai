const { template } = require('@babel/core')
//64130500108 , Premkamol Sriyothee
class BookMark {
  constructor(isbn, totalPages = 0){
    this.isbn = isbn;
    this.totalPages = totalPages;
    this.bookMarks = [];
  }
  addBookMark(pageNumber){
    // add = array.push(parameter)
    if(pageNumber <= 1 || pageNumber > this.totalPages){
      return this.bookMarks.length
    }else{
      this.bookMarks.push(pageNumber)
        return this.bookMarks.length
      }
    } 
    // arr.filter(เงื่อนไขที่ต้องการ ต้องเป็นfunction):( e => e !== 2 )
    removeBookMark(pageNumber){
      if(!this.bookMarks.includes(pageNumber)){
        return undefined
      } this.bookMarks = (this.bookMarks.filter( i => i !== pageNumber ))
      return pageNumber
    }
    goToFirstBookMark(){
      if(this.bookMarks.length === 0 ){
        return undefined
      }
      return this.bookMarks[0]
    }
    goToLastBookMark(){
      if(this.bookMarks.length === 0 ){
        return undefined
      }
      return this.bookMarks[this.bookMarks.length-1]
    }
    getBookMarks(){
      return this.bookMarks
  }
}
  


module.exports = BookMark
