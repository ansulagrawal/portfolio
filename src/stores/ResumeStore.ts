import { defineStore } from 'pinia';
import type { Resume } from '../models/Resume';
/** Resume files */
import enIN from '@/assets/json/resume.en.json';
import guIN from '@/assets/json/resume.gu.json';
import hiIN from '@/assets/json/resume.hi.json';

const languages = [
  { code: 'en-IN', data: enIN },
  { code: 'gu-IN', data: guIN },
  { code: 'hi-IN', data: hiIN },
];

export const useResumeStore = defineStore('resume', {
  state: () => {
    return {
      resume: languages[0].data as Resume,
    };
  },
  actions: {
    loadResume() {
      if ('locale' in localStorage) {
        const selected = languages.find((lang) => lang.code == localStorage.locale)?.data;
        if (selected) this.resume = selected;
      }
    },
  },
});
