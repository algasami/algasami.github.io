"use client";
import React from "react";
import {
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  TorusKnotGeometry,
  WebGLRenderer,
} from "three";
import WebGL from "../hooks/WebGL";

export class Preloader extends React.Component<
  {},
  { webglAvailable: boolean }
> {
  public static inited: boolean = false;
  private frameRef: React.RefObject<HTMLDivElement>;
  private renderer: WebGLRenderer | undefined = undefined;
  public mounted: boolean = false;
  constructor(props: any) {
    super(props);
    this.frameRef = React.createRef();
    this.state = { webglAvailable: false };
  }
  componentDidMount(): void {
    this.mounted = true;
    if (Preloader.inited === true) return;
    console.log("preloader loaded");
    Preloader.inited = true; // singleton
    if (WebGL.isWebGLAvailable()) {
      this.setState({ webglAvailable: true });
    } else {
      this.setState({ webglAvailable: false });
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById("webgl-message")?.appendChild(warning);
      return;
    }
    const currentInstance = this.frameRef.current;
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      35,
      currentInstance.offsetWidth / currentInstance.offsetHeight,
      0.1,
      300
    );
    camera.position.set(0, 10, 70);

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(
      currentInstance.offsetWidth,
      currentInstance.offsetHeight
    );
    currentInstance.appendChild(this.renderer.domElement);

    const light = new DirectionalLight(0xffffff, 0.5);
    light.position.set(0, -5, 0);

    const candle = new DirectionalLight(0x4c00ff, 0.1);
    candle.position.set(0, 10, 70);

    const radius = 5.5;
    const tubeRadius = 1.5;
    const radialSegments = 128;
    const tubularSegments = 128;
    const p = 2;
    const q = 5;
    const geometry = new TorusKnotGeometry(
      radius,
      tubeRadius,
      tubularSegments,
      radialSegments,
      p,
      q
    );
    const material = new MeshStandardMaterial({
      color: 0xb46be8,
      metalness: 0.3,
      roughness: 0.8,
    });
    const knot = new Mesh(geometry, material);
    scene.add(knot);
    scene.add(light);
    scene.add(candle);
    knot.position.z = -5;
    camera.lookAt(knot.position);

    const obj = this;
    function animate() {
      if (obj.mounted === false) {
        return;
      }
      console.log("rendering");
      knot.rotation.y += 0.025;
      candle.intensity = Math.sin(knot.rotation.y) * 0.2;

      obj.renderer.render(scene, camera);

      window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
  }

  componentWillUnmount(): void {
    this.mounted = false;
    this.frameRef.current.removeChild(this.renderer.domElement);
    this.renderer.dispose();
    Preloader.inited = false;
    console.log("preloader unloaded");
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
          {this.state.webglAvailable ? "Praise the almighty torus knot." : ""}
        </div>
      </div>
    );
  }
}
