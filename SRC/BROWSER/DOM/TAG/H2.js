/*
 * HTML h2 태그와 대응되는 클래스
 */
global.H2 = CLASS({

	preset : () => {
		return DOM;
	},

	params : () => {
		return {
			tag : 'h2'
		};
	}
});
