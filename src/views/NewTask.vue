<template>
  <div>
    <form @submit.prevent="onSubmit" @keypress="preventSubmitOnKey">
      <Input
        label="Title"
        placeholder="Write the title..."
        name="title-input"
        v-bind:errors="errors['title']"
        v-model="title"
        v-on:on-validate="onValidate"
      />

      <InputTags
        label="Tags"
        placeholder="Choose the tags"
        name="tags-input"
        v-model="tags"
        v-on:on-validate="onValidate"
        v-on:on-tag-save="onTagSave"
        v-bind:tagsArr="tagsArr"
        v-bind:errors="errors['tagsArr']"
      />

      <InputContent
        label="Description"
        placeholder="Describe you task"
        name="content-input"
        v-model="description"
        v-on:on-validate="onValidate"
        v-bind:errors="errors['description']"
        v-bind:description="description"
      />

      <InputDate label="Date" name="date-input" v-model="date" />

      <button type="submit" :disabled="!formIsValid">Save</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Input from '@/components/Input.vue';
import InputDate from '@/components/InputDate.vue';
import InputTags from '@/components/InputTags.vue';
import InputContent from '@/components/InputContent.vue';

export default {
  name: 'NewTask',
  components: {
    Input,
    InputDate,
    InputTags,
    InputContent,
  },
  data() {
    return {
      title: '',
      tags: '',
      tagsArr: [],
      description: '',
      date: '',
      errors: { title: false, tagsArr: false, description: false },
    };
  },
  methods: {
    ...mapMutations(['createTask']),

    preventSubmitOnKey(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },

    onSubmit() {
      if (this.formIsValid) {
        const newTask = {
          id: Date.now(),
          title: this.title,
          tags: this.tagsArr,
          description: this.description,
          date: new Date(this.date).getTime(), // to unix
          status: true,
        };

        this.createTask(newTask);
        this.resetForm();
      }
    },

    onValidate(formItem) {
      if (!this[formItem] || !this[formItem].length) {
        this.errors[formItem] = true;
      } else {
        this.errors[formItem] = false;
      }
    },

    onTagSave(e) {
      if (e.code === 'Enter' && !!this.tags) {
        this.tagsArr.push({
          content: this.tags,
          id: Date.now() + this.tags,
        });
        this.tags = '';
      }
    },

    resetForm() {
      this.title = '';
      this.tags = '';
      this.tagsArr = [];
      this.description = '';
      this.date = '';
      this.errors = { title: false, tagsArr: false, description: false };
    },
  },
  watch: {
    title() {
      if (this.title) this.onValidate('title');
    },
    tagsArr() {
      if (this.tagsArr.length) this.onValidate('tagsArr');
    },
    description() {
      if (this.description) this.onValidate('description');
    },
  },
  computed: {
    formIsValid() {
      return (
        !!this.title &&
        !!this.description &&
        this.description.length <= 2048 &&
        !!this.tagsArr.length
      );
    },
  },
};
</script>

<style>
form {
  width: 500px;
  margin: auto;
  padding: 10px;
}

input {
  display: block;
  width: 400px;
  padding: 10px;
}

.error-message {
  color: red;
  font-size: 12px;
  padding: 0;
  margin: 0;
}

.form-item {
  margin-bottom: 15px;
}
.no-tags {
  color: white;
  background-color: saddlebrown;
  width: 414px;
  padding: 0;
  margin: 5px 0 0 0;
  padding: 5px;
}

.meta-info {
  font-size: 12px;
  text-align: right;
  margin: 0 80px;
  padding: 0;
}
</style>
