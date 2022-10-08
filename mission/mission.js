const theme = document.getElementById('theme')
theme.addEventListener("change", changeTheme);

const themeSelector = getElementById('theme')// replace with code to select dropdown element out of the HTML
function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    let value = themeSelector.value;
    // if the value is dark then:
    // add the dark class to the body
    // change the source of the logo to point to the white logo.
    if (value == 'dark'){
        document.body.classList.add('dark');
        const image = document.querySelector("#img");
        image = <img src="byui-logo_blue.webp"></img>
    }
    // otherwise
    // remove the dark class
    // make sure the logo src is the blue logo.
    else{
        document.body.className('');
    }
}           
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.