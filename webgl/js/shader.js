export function createShader(gl, type, source) {
	const shader = gl.createShader(type)
	gl.shaderSource(shader, source);
	gl.compileShader(shader)
	let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if( success ) {
		return shader
	}
	console.log(gl.getShaderInfoLog(shader) )
}


export function createProgram(gl, ver, fa) {
	let program = gl.createProgram();
	gl.attachShader(program, ver);
	gl.attachShader(program, fa);
	gl.linkProgram(program);
	return program;
}