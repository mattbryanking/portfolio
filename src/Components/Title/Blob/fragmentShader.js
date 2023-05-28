// ADAPTED FROM https://github.com/chetanverma16/react-three-fiber-blob
// ORIGINALLY CREATED BY chetanverma16 ON GITHUB

const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 1.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = vec3(0.0, 0.0, 0.5) * (1.0 - vUv.y + distort) + vec3(0.8, 0.8, 1.0) * (vUv.y - distort);
    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;