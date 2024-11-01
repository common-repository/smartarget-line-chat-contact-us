function init_line (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_line(hash);
}

function insertJs_line (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_line`;
	document.head.appendChild(script);
}

init_line(smartarget_line_params.hash);
