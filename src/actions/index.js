

export function selectBook (book) {
	//Select book is an action creator
	//It needs to return an action
	//An object with a type property
	return {
		type: 'BOOK_SELECTED', 
		payload: book
	}
}













