(function(){document.addEventListener("keydown",function(e){if(e.ctrlKey&&e.shiftKey&&e.keyCode==73){disabledEvent(e)}
if(e.ctrlKey&&e.shiftKey&&e.keyCode==74){disabledEvent(e)}
if(e.keyCode==83&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)){disabledEvent(e)}
if(e.ctrlKey&&e.keyCode==85){disabledEvent(e)}
if(event.keyCode==123){disabledEvent(e)}},!1);function disabledEvent(e){if(e.stopPropagation){e.stopPropagation()}else if(window.event){window.event.cancelBubble=!0}
e.preventDefault();return!1}})()
