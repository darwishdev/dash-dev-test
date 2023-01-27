<template>
  <q-page padding>
    <DFormExample />
  </q-page>
</template>

<script setup >
import {h, onBeforeMount, reactive, ref} from 'vue';
import { api } from 'boot/api'

import DFormExample from 'components/form/DFormExample.vue'

const loading = ref(true);
const state = ref({
  name: '',
  phone: '',
  checkbox: false,
  toggle: false,
  slider: 0,
  group: null,
  city2: '',
  dateRange: '',
  date: '',
});
const formProps = reactive({
  default: {
    class: 'row  justify-center q-pa-md',
  },
  inputs: [
    {
      default: {
        name: 'name',
        label: 'name',
      },
      cols: 'col-6',
      initialValue: '',
      component: 'QInput',
    },
    {
      default: {
        name: 'phone',
        rules : ['required'],

        label: 'phone',
      },
      cols: 'col-6',

      initialValue: 's',
      component: 'QInput',
    },
    {
      default: {
        name: 'checkbox',
        label: 'checkbox',

      },
      cols: 'col-6',
      initialValue: false,
      component: 'QCheckbox',
    },
    {
      default: {
        name: 'toggle',
        label: 'toggle',
      },
      cols: 'col-6',
      initialValue: false,
      component: 'QToggle',
    },
    {
      default: {
        name: 'slider',
        label: 'slider',
        min: 20,
        max: 80,
        step: 10,
      },
      cols: 'col-6',
      initialValue: false,
      component: 'QSlider',
    },
    {
      default: {
        name: 'group',
        label: 'group',
        options: [
          {
            label: 'Option 1',
            value: 'op1'
          },
          {
            label: 'Option 2',
            value: 'op2'
          },
          {
            label: 'Option 3',
            value: 'op3'
          }
        ],

      },
      initialValue: null,
      cols: 'col-6',
      component: 'QOptionGroup',
    },

    {
      default: {
        name: 'city2',
        label: 'city',
        optionLabel: 'name',
        options: [],
        autoComplete: true,

      },
      cols: 'col-6',
      getData: () => {
        return new Promise((resolve, reject) => {
          api.listUsers({  }).then((res) => {
            console.log(res)
            resolve(res.users)
          }).catch(e => {
            reject(e)
          })
        })
      },
      initialValue: '',
      component: 'QSelect',
    },

    {
      default: {
        name: 'dateRange',
        inputProps: {
          name: 'dateRange',
          label: 'dateRange',
          filled: true,
        },
        pickerProps: {
          range: true,

        },
      },
      cols: 'col-6',
      initialValue: '',
      component: 'QDateInput',
    },
    {
      default: {
        name: 'date',
        // closeOnContentClick: false,
        isRequired: true,
        inputProps: {
          name: 'date',
          label: 'date',
          filled: true,

        },
        pickerProps: {
          range: false,
        },
      },
      cols: 'col-6',
      initialValue: '',
      component: 'QDateInput',
    },


    {
      default: {
        label: 'Submit',
        class: 'full-width q-my-md',
        type: 'submit',
        color: 'primary',
      },
      cols: 'col-12',

      component: 'QBtn',
    },
    {
      default: {
        label: 'reset',
        class: 'full-width',
        type: 'reset',
        color: 'primary',
      },
      cols: 'col-12',

      component: 'QBtn',
    },
  ],
});




function onFormSubmit(data) {
  console.log(data);
}
onBeforeMount(() => {
  loading.value = false;
})
</script>
