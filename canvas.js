//根据input等获取的file文件用canvas进行图片预览---等等
			var val = []
					var imgg = new Image();
					imgg.src = $(thiss).attr('src')
					imgg.onload = function() {
						var kkks = getBase64Show(imgg, 500);
						var srcurl = kkks[0].ulr
						var exturl = kkks[0].ext
						val.push(srcurl)
						val.push(exturl)
						contentHash[index] = val

//代码片段
function getBase64Show(img, maxLen) {
	console.log(img)
	var Arr = [];
	//生成比例
	var maxLen = maxLen;
	var width = img.width;
	var height = img.height;
	//计算缩放比例
	var rate = 1;
	if(width >= height) {
		if(width > maxLen) {
			rate = maxLen / width;
		}
	} else {
		if(height > maxLen) {
			rate = maxLen / height;
		}
	};
	img.width = width * rate;
	img.height = height * rate;
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0, img.width, img.height);
	var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
	var dataURL = canvas.toDataURL("image/" + ext, 0.9);
	Arr.push({
		"ulr": dataURL,
		"ext": ext
	})
	return Arr;
}
