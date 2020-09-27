<template>
  <div>
    <form @submit.prevent="onSubmit">
      <!-- TITLE -->
      <div class="form-item">
        <label for="title">Title:</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          v-model="title"
          @blur="onValidate('title')"
          autocomplete="off"
        />
        <p v-if="!!errors['title']" class="error-message">not valid</p>
      </div>

      <!-- TAGS -->
      <div class="form-item">
        <label for="tags">Tags:</label>
        <input
          type="text"
          placeholder="tags"
          name="tags"
          v-model="tags"
          @blur="onValidate('tagsArr')"
          @keyup="onTagSave"
          autocomplete="off"
        />

        <p class="no-tags" v-if="!tagsArr.length">No tags</p>

        <ul v-else-if="tagsArr.length">
          <li v-for="tag in tagsArr" :key="tag">
            {{ tag }}
          </li>
        </ul>

        <p v-if="errors['tagsArr']" class="error-message">not valid</p>
      </div>

      <!-- DESCRIPTION -->
      <div class="form-item">
        <label for="description">Description:</label>
        <input
          type="text"
          placeholder="description"
          v-model="description"
          name="description"
          @blur="onValidate('description')"
          maxlength="2048"
          autocomplete="off"
        />
        <p v-if="errors['description']" class="error-message">not valid</p>
        <p class="meta-info">{{ description.length }}/2048</p>
      </div>

      <!-- DATE -->
      <div class="form-item">
        <label for="date">Date:</label>
        <input
          type="date"
          placeholder="date"
          name="date"
          v-model="date"
          autocomplete="off"
        />
      </div>

      <button type="submit" :disabled="!formIsValid">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewTask',
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
    onSubmit() {
      if (this.formIsValid) {
        console.log('data', {
          title: this.title,
          tags: this.tags,
          description: this.description,
          date: this.date,
        });
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
        this.tagsArr.push(this.tags);
        this.tags = '';
      }
    },
  },
  watch: {
    title() {
      this.onValidate('title');
    },
    tagsArr() {
      this.onValidate('tagsArr');
    },
    description() {
      this.onValidate('description');
    },
  },
  computed: {
    formIsValid() {
      return (
        !!this.title &&
        !!this.description &&
        this.description.length <= 2048 &&
        !!this.tags
      );
    },
  },
};
</script>

<style scoped>
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

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 424px;
  box-sizing: border-box;
  margin-top: 5px;
}

li {
  color: white;
  background-color: saddlebrown;
  padding: 5px;
  margin: 0px 5px 5px 0;
}
</style>
