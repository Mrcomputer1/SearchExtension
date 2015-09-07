(function(ext){
	
	ext.version = "v1.0";
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: '((READY)) Search Extension ' + ext.version + ' [MRCOMPUTER1]'};
	};
	
	ext.search = function(item, number, menu, callback) {
		$.get("http://crossorigin.me/http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" + item + "&rsz=1&start=" + number + "&safe=active", {}, function(data){
			if(menu == "Title"){
				callback(data['responseData']['results'][0]['titleNoFormatting']);
			}else if(menu == "URL"){
				callback(data['responseData']['results'][0]['unescapedUrl']);
			}else if(menu == "Content"){
				callback(data['responseData']['results'][0]['content']);
			}else{
				callback("Something went wrong!");
			}
		}, "json")
	};
	
	var blocksMenusURL = {
		blocks: [
			['R', 'Search %s result %n return %m.item', 'search', '', 1, '']
		],
		menus: {
			item: ["Title", "URL", "Content"]
		},
		url: 'http://mrcomputer1.github.io/SearchExtension/'
	};
	ScratchExtensions.register('Search Extension', blocksMenusURL, ext);
})({});
