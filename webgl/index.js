import {
	createShader,
	createProgram
} from "./js/shader.js";

const gl = document.getElementById('can').getContext("webgl");

const vertex = document.getElementById('vertex').innerText;
const fragment = document.getElementById('fragment').innerText;

const ver = createShader(gl, gl.VERTEX_SHADER, vertex)
const fa = createShader(gl, gl.FRAGMENT_SHADER, fragment)
console.log(ver,fa)

let program = createProgram(gl, ver, fa);
gl.useProgram(program)

gl.clearColor(0, 0, 1, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.POINTS, 0, 1);

let canvas = document.getElementById('can');
let a_position = gl.getAttribLocation(program, "a_position")
let screenSize = gl.getUniformLocation(program, "screenSize")
let a_color = gl.getAttribLocation(program, "a_color")

gl.uniform2f(screenSize, canvas.clientWidth, canvas.height)

function bindEvent() {
	const points = [];
	canvas.onmousedown = function (e) {
		gl.clearColor(0, 0, 1, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.POINTS, 0, 1);
		const color = [Math.random(), Math.random(), Math.random(), Math.random()]
		let x = e.offsetX;
		let y = e.offsetY;
		points.push( {x, y,color} );
		points.forEach( ele => { 
			console.log(points)
			gl.vertexAttrib3f(a_position, ele.x, ele.y, 0.0);
			gl.vertexAttrib4f(a_color,...ele.color)
			gl.drawArrays(gl.POINTS, 0, 1);
		})
		// gl.clear(gl.COLOR_BUFFER_BIT);

	}
}

bindEvent()