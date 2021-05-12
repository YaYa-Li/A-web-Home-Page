var comba = {}
jQuery.support.cors = true; 
/**
 * 通过GET方法向OA取数据
 * @param {Object} url
 * @param {Object} successFn
 * @param {Object} errorFn
 */
function getSYNFromOA(url, successFn, errorFn) {
	jQuery.ajax({
		type: "GET",
		url: url,
		async: false,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "script",
		success: function(data) {
			successFn(comba.jsReturnObject);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errorFn({
				"XMLHttpRequest": XMLHttpRequest,
				"textStatus": textStatus,
				"errorThrown": errorThrown
			});
		}
	});
}

/**
 * 通过GET方法向SAM取数据
 * @param {Object} url
 * @param {Object} successFn
 * @param {Object} errorFn
 */
function getSYN(url,successFn, errorFn) {
	jQuery.ajax({
		type: "GET",
		url: url,
		async: false, //同步
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		success: function(data) {
			successFn(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errorFn({
				"XMLHttpRequest": XMLHttpRequest,
				"textStatus": textStatus,
				"errorThrown": errorThrown
			});
		}
	});
}



/**
 * 通过POST方法向SAM取数据
 * @param {Object} url
 * @param {Object} successFn
 * @param {Object} errorFn
 */
function postSYN(url, data, successFn, errorFn) {
	jQuery.ajax({
		type: "POST",
		url: url,
		async: false, //同步
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify(data),
		success: function(data) {
			successFn(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errorFn({
				"XMLHttpRequest": XMLHttpRequest,
				"textStatus": textStatus,
				"errorThrown": errorThrown
			});
		}
	});
}


/**
 * 通过put方法向SAM更改数据
 * @param {Object} url
 * @param {Object} successFn
 * @param {Object} errorFn
 */
function putSYN(url, data, successFn, errorFn) {
	jQuery.ajax({
		type: "PUT",
		url: url,
		async: false, //同步
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify(data),
		success: function(data) {
			successFn(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			errorFn({
				"XMLHttpRequest": XMLHttpRequest,
				"textStatus": textStatus,
				"errorThrown": errorThrown
			});
		}
	});
}

/***
 * 解决IE8 console未定义的问题
 */
window.console = window.console || (function () {
    var c ={}; 
　　 c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile= c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();
        