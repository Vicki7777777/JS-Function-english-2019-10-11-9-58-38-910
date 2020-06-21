function alphabetSort(message){
	var a = message.split('');
	var b = a.sort();
	var c = b.join('');
    document.write(c);
}
alphabetSort('hello'); // should return 'ehllo'
