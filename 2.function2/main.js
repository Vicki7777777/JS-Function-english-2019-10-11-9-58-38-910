function palindrome(message){
  var x = (message.length)-1;
  document.write(message.charAt(0) == message.charAt(x));
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
