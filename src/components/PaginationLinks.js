import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
   const isFirst = currentPage === 1
   const isLast = currentPage === numberOfPages
   const previousPage = currentPage - 1 === 1 ? '/' : '/strona/' + (currentPage - 1).toString()
   const nextPage = '/strona/' + (currentPage + 1).toString()
   return (
      <Pagination aria-label="Page navigation example">
         {isFirst ? (
            <PaginationItem disabled>
               <PaginationLink previous href="/" title="BezPospiechu homepage" />
            </PaginationItem>
         ) : (
            <PaginationItem>
               <PaginationLink previous href={previousPage} title="BezPospiechu poprzednia strona"/>
            </PaginationItem>
         )}
         {Array.from({ length: numberOfPages }, (_, i) => 
         currentPage === i + 1 ? (
            <PaginationItem active key={`page-number${i + 1}`}>
               <PaginationLink href={`/${i === 0 ? '' : 'strona/' + (i + 1)}`} title={`BezPospiechu paginacja /${i === 0 ? '' : 'strona/' + (i + 1)}`}>
                  {i + 1}
               </PaginationLink>
            </PaginationItem>
            ) : (
            <PaginationItem key={`page-number${i + 1}`}>
               <PaginationLink href={`/${i === 0 ? '' : 'strona/' + (i + 1)}`} title={`BezPospiechu paginacja /${i === 0 ? '' : 'strona/' + (i + 1)}`}>
                  {i + 1}
               </PaginationLink>
            </PaginationItem>
            )
         )}
         {isLast ? (
            <PaginationItem disabled>
               <PaginationLink next href={nextPage} title="BezPospiechu paginacja następna strona"/>
            </PaginationItem>
         ) : (
            <PaginationItem>
               <PaginationLink next href={nextPage} title={`BezPospiechu paginacja następna strona`}/>
            </PaginationItem>
         )}
      </Pagination>

   )
}

export default PaginationLinks