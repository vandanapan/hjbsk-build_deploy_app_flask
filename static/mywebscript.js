let runAddition = () => {
	send_request("sum")
};

let runSubtraction = () => {
	send_request("sub")
};

let runMultiplication = () => {
	send_request("mul")
};

function send_request(operation){

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

	let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("system_response").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", operation+"?num1="+num1+"&num2="+num2, true);
    xhttp.send();
}