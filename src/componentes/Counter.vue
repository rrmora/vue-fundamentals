<template>
<div>
  <h2>{{ customTitle }}</h2>
  <p>{{counter}} <sup>2</sup> = {{ squereCounter }}</p>
  <p data-testid="counter">{{counter}}</p>
<div class="btn-button">
  <button @click="increase()" class="btn">+ 1</button>
  <button @click="decrease()" class="btn">- 1</button>
</div>

</div>
</template>

<script>
export default {
  //props: ['title', 'start'],
  props: {
    title: String,
    start: {
      type: Number,
      default: 10,
      validator(value){
        return value >= 0
      }
      // required: true
    },
  },
  data() {
    return {
      counter: this.start,
    }
  },
  methods: {
      increase() {
        this.counter++
      },
      decrease() {
        this.counter--
      }
    },
    computed: {
      squereCounter() {
        return this.counter * this.counter
      },
      customTitle() {
        return this.title || 'Counter'
      }
    }
}
</script>

<style>
.btn {
  background-color: #64BB87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding:5px 15px;
  transition: 0.3s ease-in-out;
}
.btn:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>