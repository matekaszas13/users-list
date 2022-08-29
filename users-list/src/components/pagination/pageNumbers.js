export function generatePageNumbers(maxNumberOfPages){
    let pages = new Array();
    for(let number = 1; number <= maxNumberOfPages; number++){
        pages = [...pages, number]
    }
    return pages;
}

