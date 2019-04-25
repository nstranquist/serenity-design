/* attach click listener to objectives */
const objectives = document.getElementsByClassName('objective-container');

for (let i=0; i<objectives.length; i++) {
    objectives[i].addEventListener('click', function (event) {
        alert("you clicked objective number " + (i+1));
    });
}