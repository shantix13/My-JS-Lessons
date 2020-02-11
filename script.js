// document.querySelector("#ranger").oninput = () => {
//     let take_range = document.querySelector("#ranger").value;
//     document.querySelector("#inputer").innerHTML = take_range;
// };


document.querySelector("#btn").onclick = (event) => {
    event.preventDefault();
    let get_check = document.querySelector("#ch1");
    if (get_check.checked) {
        console.log("Checked");
    } else {
        console.log("Not checked");
    }

    let former = document.querySelector('#former');
    console.log(former.elements.texter.value);
}



