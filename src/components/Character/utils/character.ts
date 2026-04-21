import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const toMeshMaterialArray = (material: THREE.Material | THREE.Material[]) => {
  return Array.isArray(material) ? material : [material];
};

const applyTeacherOutfit = (character: THREE.Object3D) => {
  const uniformKhaki = new THREE.Color("#d8ccb8");
  const uniformKhakiDark = new THREE.Color("#c8baa3");
  const goldAccent = new THREE.Color("#c8a754");
  const beltBrown = new THREE.Color("#7c6646");

  character.traverse((child) => {
    if (!("isMesh" in child) || !child.isMesh) return;
    const mesh = child as THREE.Mesh;
    const meshName = mesh.name.toLowerCase();
    const materials = toMeshMaterialArray(mesh.material);

    materials.forEach((material) => {
      if (!(material instanceof THREE.MeshStandardMaterial)) return;

      const materialName = material.name.toLowerCase();
      const targetName = `${meshName} ${materialName}`;

      // Keep skin tones and hair as-is, then restyle clothing into a khaki uniform palette.
      if (
        /skin|face|head|hand|arm|finger|leg|body|hair|brow|lash|eye|teeth|mouth/.test(
          targetName
        )
      ) {
        return;
      }

      if (/shirt|top|torso|upper|jacket|coat|uniform|cloth/.test(targetName)) {
        material.color.copy(uniformKhaki);
        material.roughness = 0.76;
        material.metalness = 0.03;
        return;
      }

      if (/pant|trouser|lower|skirt/.test(targetName)) {
        material.color.copy(uniformKhakiDark);
        material.roughness = 0.8;
        material.metalness = 0.02;
        return;
      }

      if (/belt|buckle/.test(targetName)) {
        material.color.copy(beltBrown);
        material.roughness = 0.65;
        material.metalness = 0.1;
        return;
      }

      if (/pin|badge|medal|button|epaulette|strap/.test(targetName)) {
        material.color.copy(goldAccent);
        material.roughness = 0.35;
        material.metalness = 0.45;
        return;
      }

      if (/shoe|boot/.test(targetName)) {
        material.color.set("#2b2a28");
        material.roughness = 0.78;
        return;
      }

      // Fallback for unknown outfit parts so the overall look stays close to the reference.
      if (/fabric|clothes|wear|outfit/.test(targetName)) {
        material.color.copy(uniformKhaki);
        material.roughness = 0.78;
        material.metalness = 0.02;
      }
    });
  });
};

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            applyTeacherOutfit(character);
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
