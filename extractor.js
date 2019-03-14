;(function($){
	$('#extractor').on('click',function (argument) {
		/* body... */

		var htmlContext = $('textarea').val();
		console.log(htmlContext);
		if ('Blob' in window) 
		{
			var fileName = prompt('Please enter file name to save', 'Untitled.html');
			if (fileName) 
			{
				var textToWrite = $('textarea').val();
				var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });

				if ('msSaveOrOpenBlob' in navigator) {
					navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
				} 
				else 
				{
					var downloadLink = document.createElement('a');
					downloadLink.download = fileName;
					downloadLink.innerHTML = 'Download File';

					if ('webkitURL' in window) 
					{
					// Chrome allows the link to be clicked without actually adding it to the DOM.
					downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
				} 
				else 
				{
					downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
					downloadLink.click(function(){
						document.body.removeChild(event.target);
					}); 
					downloadLink.style.display = 'none';
					document.body.appendChild(downloadLink);
				}
				downloadLink.click();
			}
		}
	} 
	else 
	{
		alert('Your browser does not support the HTML5 Blob.');
	}
});/*End*/
})(jQuery);