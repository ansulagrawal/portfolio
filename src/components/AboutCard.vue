<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HeroIcon from './HeroIcon.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const menu = [
  { route: '/', name: 'menu.experience', icon: 'BriefcaseIcon' },
  { route: 'project', name: 'menu.project', icon: 'CodeBracketIcon' },
  { route: 'education', name: 'menu.education', icon: 'AcademicCapIcon' },
];
</script>

<template>
  <div class="card">
    <!-- Greeting -->
    <h2 class="mb-2 text-xl font-semibold dark:text-night-50">
      {{ resume.profile.aboutMe.greeting }}
    </h2>

    <!-- Introduction -->
    <p class="mb-4 text-sm text-gray-600 dark:text-night-200">
      {{ resume.profile.aboutMe.introduction }}
    </p>

    <!-- Journey Section -->
    <div class="mb-4">
      <h3 class="text-md mb-2 font-semibold dark:text-night-100">
        {{ resume.profile.aboutMe.journey.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-night-200">
        {{ resume.profile.aboutMe.journey.content }}
      </p>
    </div>

    <!-- Expertise Section -->
    <div class="mb-4">
      <h3 class="text-md mb-2 font-semibold dark:text-night-100">
        {{ resume.profile.aboutMe.expertise.title }}
      </h3>
      <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-night-200">
        <li v-for="(item, index) in resume.profile.aboutMe.expertise.items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Impact Metrics Section -->
    <div class="mb-4">
      <h3 class="text-md mb-2 font-semibold dark:text-night-100">
        {{ resume.profile.aboutMe.impact.title }}
      </h3>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div
          v-for="(metric, index) in resume.profile.aboutMe.impact.metrics"
          :key="index"
          class="rounded-lg bg-gray-50 p-2 text-center dark:bg-night-700">
          <div class="text-lg font-bold text-primary-500">{{ metric.value }}</div>
          <div class="text-xs text-gray-500 dark:text-night-300">{{ metric.label }}</div>
        </div>
      </div>
    </div>

    <!-- Philosophy Section -->
    <div class="mb-4">
      <h3 class="text-md mb-2 font-semibold dark:text-night-100">
        {{ resume.profile.aboutMe.philosophy.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-night-200">
        {{ resume.profile.aboutMe.philosophy.content }}
      </p>
    </div>

    <!-- Beyond Code Section -->
    <div class="mb-4">
      <h3 class="text-md mb-2 font-semibold dark:text-night-100">
        {{ resume.profile.aboutMe.beyondCode.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-night-200">
        {{ resume.profile.aboutMe.beyondCode.content }}
      </p>
    </div>

    <!-- Call to Action -->
    <p class="mb-5 text-sm font-medium italic text-gray-700 dark:text-night-100">
      {{ resume.profile.aboutMe.callToAction }}
    </p>

    <!-- Navigation Menu -->
    <ul class="inline-flex space-x-2 font-semibold">
      <li v-for="(item, index) of menu" :key="index">
        <router-link
          :to="item.route"
          class="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-night-700 dark:text-night-400 dark:hover:border-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500">
          <HeroIcon :icon="item.icon" class="hidden h-4 w-4 sm:block" />
          <span>{{ $t(item.name) }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
