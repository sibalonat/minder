<script setup>

import 'aframe'
import 'mind-ar/dist/mindar-image-aframe.prod.js'
import MindarViewer from "./Parts/Minder.vue";
import { ref } from 'vue';


  // references
  const mindarViewerRef = ref(null)
  const title = ref('START')

  const handleARSystems = () => {
    const sceneEl = mindarViewerRef.value.sceneRef;
    const arSystem = sceneEl.systems['mindar-image-system']
    if(title.value == 'START') {
      arSystem.start()
      title.value = 'STOP'
    } else {
      arSystem.stop()
      title.value = 'START'
    }
}

</script>

<template>
    <div class="w-4/5 mx-auto my-auto">
        <div class="contain">
          <mindar-viewer ref="mindarViewerRef" />
        </div>
        <div class="flex flex-col mx-auto">
            <p class="w-full my-auto text-xl text-center">
              Mind AR implementation
            </p>
            <button class="mx-auto" @click="handleARSystems()">
                {{ title }}
            </button>
        </div>
    </div>
</template>

<style>
.contain {
  margin: 20px auto;
  position: relative;
  height: 500px;
  width: 600px;
  overflow: hidden;
}
</style>