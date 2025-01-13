<template>
  <section class="flex items-center justify-center pt-28 pb-12 login_container sm:px-20">
      <div class="container min-h-full">
        <div class="row mt-6">
          <div class="col-lg-5 my-auto">
            <div>
                <p class="hero-text">
                    <span>I’m Clint, a Frontend Web Engineer.</span>
                </p>
            </div>
          </div>
          <div class="col-lg-7 position-relative">
              <div class="rounded-md overflow-hidden w-100">
                <!-- :src="https://github.com/srestraj.png?size=512" -->
                <img
                  :src="heroImage"
                  alt="clint losee"
                  class="img-fluid hero-img w-100 position-relative"
                >
              </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/img/hero-img.png'
</script>
