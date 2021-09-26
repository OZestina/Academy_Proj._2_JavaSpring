/*카카오 vision api 모듈화 */

function visionAPI(imgUrl) {
	var url = "https://dapi.kakao.com/v2/vision/multitag/generate";
	var data = "image_url="+imgUrl;
	var xhr = new XMLHttpRequest();
		
	xhr.onload = function () {
		if (xhr.status == 200) {
			var res = xhr.response;
			var resJSON = JSON.parse(res)
			alert(resJSON['result']['label']);
			console.log(resJSON['result']['label']); 
			return resJSON['result']['label'];
		} else if (xhr.status == 400){
			alert('400');
			alert(xhr.response);
		} else if (xhr.status == 404){
			alert('404');
		} else {
			alert('500');
		}
	};
	
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("Authorization", "KakaoAK 792fadb1c90a143478abc13a558a9f8a");
	xhr.send(data);
}
