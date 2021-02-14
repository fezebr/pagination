import React, { Fragment } from 'react';

const Paginations = ({setCurrentPage,currentPage, postsLength, postPerPage,paginate }) => {
     let pageNumber = []
     for (let i = 1; i <=  Math.ceil(postsLength / postPerPage); i++) {
          pageNumber.push(i)
     }
     let style =null
     const ttst =( number) =>{
          paginate(number);
           style ="active"
       console.log(style)    
     }
     console.log(currentPage)
     console.log(pageNumber)
          return (
               <Fragment>
{/* {currentPage === pageNumber ? 'active' : ''} */}
                    <div className="center">
                         <ul className="pagination">
                              <li><a>«</a></li>
                              {/* <li><a>1</a></li>
                              <li><a className="active">2</a></li> */}
                              {pageNumber.map(number =>(
                                    <li ><a className={currentPage === number ? 'active' : ''} onClick={() => paginate(number)}>{number}</a></li>
                              ))}
                              <li><a onClick={() =>{setCurrentPage(currentPage ++)}}>»</a></li>
                         </ul>
                    </div>



               </Fragment>
          );
     }

     export default Paginations;