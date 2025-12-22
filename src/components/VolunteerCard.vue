<script setup lang="ts">
import { computed } from 'vue';
import ExperienceCardItem from './ExperienceCardItem.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const total = computed(() => {
  return resume.value.volunteer?.length || 0;
});
</script>
<template>
  <div class="card" v-if="total">
    <h2 class="mb-5 text-lg font-semibold dark:text-night-50">{{ $t('volunteer') }}</h2>
    <ExperienceCardItem
      v-for="(item, index) in resume.volunteer || []"
      :key="index"
      :item="item"
      :separator="total > index + 1">
    </ExperienceCardItem>
  </div>
</template>
