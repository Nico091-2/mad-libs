var button = document.getElementById('story');
button.addEventListener("click", getwords);
function getwords() {
    var words = document.querySelectorAll("input[type=text]")
    var placeholders = document.querySelectorAll(".userInput")
    // console.log(words);

    placeholders.forEach((placeholder, index) => {
        // console.log(placeholder, index);
    });

    display:none;

    placeholders.forEach((placeholder,index))=> {

        placeholder.innerHTML = words[index].ariaValueMax;
    }
    //show hidden story

}


