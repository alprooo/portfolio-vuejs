<template>
  <div class="dizme_tm_section" id="home">
    <div class="dizme_tm_hero">
      <div
        class="background"
        :data-img-url="`/img/slider/${dark ? 2 : 1}.jpg`"
      ></div>
      <div class="container">
        <div class="content">
          <div class="details">
            <div class="hello">
              <h3 class="orangeText">Hello, It's me</h3>
            </div>
            <div class="name">
              <h3>Alfian R. Saputra</h3>
            </div>
            <div class="job">
              <p>
                A <span class="greenText">Creative Designer</span>
                <!-- <span class="purpleText">Indonesia</span> -->
              </p>
            </div>
            <div class="text">
              <p>
                Empowered by a relentless pursuit of excellence, I bring projects to fruition. Let's build a brighter future together.
              </p>
            </div>
            <div class="button">
              <div class="dizme_tm_button">
                <a class="anchor" href="#about"><span>About Me</span></a>
              </div>
              <div class="social">
                <ul>
                  <!-- <li>
                    <a href="#"><i class="icon-facebook-1"></i></a>
                  </li> -->
                  <li>
                    <a href="#"><i class="icon-twitter-1"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-linkedin-1"></i></a>
                  </li>
                  <!-- <li>
                    <a href="#"><i class="icon-sitemap"></i></a>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
          <div class="avatar">
            <div class="image">
              <img src="/img/slider/avatar2.png" alt="" />
              <span
                class="skills illustrator anim_moveBottom"
                v-html="ai"
              ></span>
              <span class="skills photoshop anim_moveBottom" v-html="ps"></span>
              <span class="skills figma anim_moveBottom" v-html="figma"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="dizme_tm_down">
        <a class="anchor" href="#process" v-html="dark ? mouseDark : mouse">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ai, figma, mouse, mouseDark, ps } from "../svg";
export default {
  name: "HomeComponent",
  data() {
    return { ai, ps, figma, mouse, mouseDark };
  },
  props: {
    dark: { type: Boolean },
  },
};
</script>
