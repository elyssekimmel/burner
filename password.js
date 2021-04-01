var placeholder = document.createElement('div');
placeholder.id = "divInner";
//document.getElementById('divOuter').appendChild(placeholder);

var div1 = document.createElement("input");
div1.id = "partitioned";
//document.getElementById("divInner").appendChild(div1);
placeholder.appendChild(div1);
document.getElementById('divOuter').appendChild(placeholder);

var obj = document.getElementById('partitioned');
obj.addEventListener('keydown', stopCarret); 
obj.addEventListener('keyup', stopCarret); 

function stopCarret() {
	if (obj.value.length > 3){
		setCaretPosition(obj, 3);
	}
}

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Press me';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    let passwordEntry = document.getElementById('partitioned').value;
    //check if entered password correct if it is open and play video
    if(passwordEntry == '1234')
    	console.log(passwordEntry);
    else
    	console.log("WRONG");
  };
 
  var container = document.getElementById('divInner');
  container.appendChild(button);
}, false);
