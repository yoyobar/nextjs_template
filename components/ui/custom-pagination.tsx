import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from '@/components/ui/pagination'
  
  type PaginationStyleProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  
  export default function CustomPagination({ currentPage, totalPages, onPageChange }: PaginationStyleProps) {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
  
    const getPages = () => {
      const pages: (number | string)[] = [];
      const maxPagesToShow = 5; // 중앙에 표시할 페이지 수
      const sidePages = 2; // 양쪽에 표시할 페이지 수
  
      if (totalPages <= maxPagesToShow) {
        // 페이지가 적으면 전부 표시
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 현재 페이지 근처에 표시할 페이지 결정
        let startPage = Math.max(2, currentPage - sidePages);
        let endPage = Math.min(totalPages - 1, currentPage + sidePages);
  
        if (currentPage <= sidePages) {
          // 첫 번째 페이지들이 가까울 경우
          endPage = maxPagesToShow;
        }
  
        if (currentPage >= totalPages - sidePages) {
          // 마지막 페이지들이 가까울 경우
          startPage = totalPages - sidePages * 2;
        }
  
        pages.push(1); // 첫 번째 페이지
        if (startPage > 2) {
          // 두 번째 페이지부터 시작되면 생략 기호 추가
          pages.push('...');
        }
  
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
  
        if (endPage < totalPages - 1) {
          // 마지막 전 페이지에서 생략 기호 추가
          pages.push('...');
        }
  
        pages.push(totalPages); // 마지막 페이지
      }
  
      return pages;
    };
  
    const handlePrevious = () => {
      if (!isFirstPage) {
        onPageChange(Math.floor(currentPage - 1));
      }
    };
  
    const handleNext = () => {
      if (!isLastPage) {
        onPageChange(Math.floor(currentPage + 1));
      }
    };
  
    return (
      <Pagination className="w-[300px] mx-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>
  
          {getPages().map((page, index) => (
            <PaginationItem key={index}>
              {typeof page === 'number' ? (
                <PaginationLink isActive={page === currentPage} onClick={() => onPageChange(Math.floor(page))}>
                  {page}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          ))}
  
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  