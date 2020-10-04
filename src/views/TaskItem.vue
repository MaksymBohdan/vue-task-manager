<template>
  <div>
    <form @submit.prevent="onSubmit" @keypress="preventSubmitOnKey">
      <p><strong>TITLE:</strong> {{ task.title }}</p>
      <p>
        <strong>TAGS:</strong>
        <span class="tag-item" v-for="tag in task.tags" :key="tag.id">{{
          tag.content
        }}</span>
      </p>

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

      <button type="submit" :disabled="!formIsValid">UPDATE</button>
      <button type="button" @click="completeTask(Number(id))">COMPLETE</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import InputContent from '@/components/InputContent.vue';
import InputDate from '@/components/InputDate.vue';

import { preventSubmitFunction, formatDate } from '@/utils';

export default {
  name: 'TaskItem',
  components: {
    InputContent,
    InputDate,
  },
  data() {
    return {
      id: this.$route.params.id,
      description: '',
      date: '',
      errors: { description: false },
    };
  },
  mounted() {
    this.description = this.task.description;
    this.date = formatDate(new Date(this.task.date));
  },
  methods: {
    ...mapMutations(['completeTask', 'updateTask']),

    onValidate(formItem) {
      if (!this[formItem] || !this[formItem].length) {
        this.errors[formItem] = true;
      } else {
        this.errors[formItem] = false;
      }
    },

    preventSubmitOnKey(e) {
      preventSubmitFunction(e);
    },

    onSubmit() {
      this.updateTask({
        id: Number(this.id),
        description: this.description,
        date: new Date(this.date).getTime(),
      });

      this.redirect();
    },

    redirect() {
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters(['currentTask']),
    task() {
      return this.currentTask(Number(this.id));
    },

    formIsValid() {
      return !!this.description && this.description.length <= 2048;
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

.tag-item {
  color: white;
  background-color: saddlebrown;
  padding: 5px;
  margin: 0px 5px 5px 0;
}

.tag-item {
  color: white;
  background-color: saddlebrown;
  padding: 5px;
  margin: 0px 5px 5px 0;
}
.error-message {
  color: red;
  font-size: 12px;
  padding: 0;
  margin: 0;
}
</style>
