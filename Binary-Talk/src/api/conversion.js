/*
Source : http://jsfiddle.net/47zwb41o
*/

export const _utf8ToBin = (s) => {
	s = unescape(encodeURIComponent(s));
	var chr,
		i = 0,
		l = s.length,
		out = "";
	for (; i < l; i++) {
		chr = s.charCodeAt(i).toString(2);
		while (chr.length % 8 != 0) {
			chr = "0" + chr;
		}
		out += chr;
	}
	return out;
};

export const _binaryToTxt = (s) => {
	var i = 0,
		l = s.length,
		chr,
		out = "";
	for (; i < l; i += 8) {
		chr = parseInt(s.substr(i, 8), 2).toString(16);
		out += "%" + (chr.length % 2 == 0 ? chr : "0" + chr);
	}
	try {
		return decodeURIComponent(out);
	} catch (error) {
		//console.log(error);
		return out.toString();
	}
};
