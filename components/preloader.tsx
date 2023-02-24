import React from "react";
import {
	BoxGeometry,
	DirectionalLight,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from "three";
import WebGL from "../hooks/WebGL";

export class Preloader extends React.Component<
	{},
	{ webglAvailable: boolean }
> {
	private frameRef: React.RefObject<HTMLDivElement>;
	private inited: boolean = false;
	constructor(props: any) {
		super(props);
		this.frameRef = React.createRef();
		this.state = { webglAvailable: false };
	}
	componentDidMount(): void {
		if (WebGL.isWebGLAvailable()) {
			this.setState({ webglAvailable: true });
		} else {
			this.setState({ webglAvailable: false });
			const warning = WebGL.getWebGLErrorMessage();
			document.getElementById("webgl-message")?.appendChild(warning);
			return;
		}
		if (this.inited) return;
		this.inited = true;
		const currentInstance = this.frameRef.current;
		const scene = new Scene();
		const camera = new PerspectiveCamera(
			35,
			currentInstance.offsetWidth / currentInstance.offsetHeight,
			0.1,
			300
		);
		camera.position.set(0, 1, 0);

		const renderer = new WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(currentInstance.offsetWidth, currentInstance.offsetHeight);
		currentInstance.appendChild(renderer.domElement);

		const light = new DirectionalLight(0xffffff, 3);
		light.position.set(15, 50, 50);

		const geometry = new BoxGeometry(1, 1, 1);
		const material = new MeshStandardMaterial({
			color: 0xb46be8,
			metalness: 0.5,
			roughness: 0.6,
		});
		const cube = new Mesh(geometry, material);
		scene.add(cube);
		scene.add(light);
		cube.position.z = -5;
		camera.lookAt(cube.position);

		function animate() {
			requestAnimationFrame(animate);

			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		}

		animate();
	}
	render(): React.ReactNode {
		return (
			<div
				className="preloader w-screen h-screen fixed top-0 left-0 z-50 flex flex-col justify-center items-center bg-white dark:bg-black"
				id="preloader"
				ref={this.frameRef}
			>
				<div
					style={{
						position: "absolute",
						top: "80vh",
						width: "100%",
						textAlign: "center",
						zIndex: "100",
						display: "block",
					}}
					id="webgl-message"
				>
					{this.state.webglAvailable
						? "This is a spinning cube. Nothing to see here, yet."
						: ""}
				</div>
			</div>
		);
	}
}
