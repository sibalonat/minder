<template>
  <div class="container py-12 mx-auto">
    <div class="w-1/2 mx-auto">
      <div class="grid grid-cols-2 pb-2 mx-auto text-lg capitalize border-b-4 divide-x-2 gap-x-4">
        <router-link class="font-semibold text-center uppercase" to="/">
          Start
        </router-link> 
        <router-link class="font-semibold text-center uppercase" to="/mind">
          MindAr
        </router-link> 
      </div>
    </div>
    <div class="flex w-full h-[60vh]">
      <router-view />
    </div>
  </div>
</template>

