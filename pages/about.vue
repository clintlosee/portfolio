<template>
  <div>
      <page-hero title="about me" description="A little history about myself"></page-hero>
      <div class="container pb-5">
        <div class="">
          <div class="text-xl about_me hero-text">
            <p v-html="aboutMeInfo"></p>
          </div>

          <div class="pt-4 skills about-stack">
            <h3>Skills</h3>
            <span v-for="skill in skills" :key="skill.id" :class="skill.id">{{ skill.title }}</span>
          </div>
        </div>
      </div>
  </div>
</template>


<script setup>
import heroImage from '../assets/img/hero-img.png'

const aboutMeInfo = `I am a Front End Software Engineer from Utah with a Bachelor's Degree in
  Digital Media with an emphasis in Internet Technologies from Utah Valley University. I focus
  primarily on Front-End JavaScript development, but I also love figuring out what I can do with
  server-side NodeJS among other things. I have been studying in this field for too many years to
  count and working professionally for over 4 years. Along with my formal schooling I have taken
  on various freelance projects and additional self-prescribed educational projects to help boost
  my skills in this ever-changing field. With various skills in Internet Technologies along with
  a strong desire to learn and grow, I'm in search of exciting opportunities to help further my
  knowledge and expertise in the web development world.<br><br>

  There is nothing I'm not willing to devote myself to learning. If you have a problem that
  requires a technology that I don't  already have experience with, you can bet I'll be the first
  to jump in and start learning it. With an almost insatiable appetite for learning new
  technologies and growing as a web developer, you can count on me to help solve your problems.`;

const skills = [
    {
        "id": 5,
        "title": "html"
    },
    {
        "id": 6,
        "title": "css"
    },
    {
        "id": 8,
        "title": "vue"
    },
    {
        "id": 4,
        "title": "nuxt"
    },
    {
        "id": 10,
        "title": "javascript"
    },
    {
        "id": 9,
        "title": "react"
    },
    {
        "id": 7,
        "title": "nodejs"
    }
];


</script>

<style scoped>
.about-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.36rem;
  }
  .about-stack span {
    margin-top: 0.8rem;
  }
</style>
