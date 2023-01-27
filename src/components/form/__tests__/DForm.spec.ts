import { mount } from '@cypress/vue';
import { reactive , ref } from 'vue';
import {DForm} from '@darwishdev/dash-dev';

describe('QuasarButton', () => {
  it('renders a message', () => {
    const label = 'Hello there';
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
    mount(DForm, {
      props: {
        default: formProps.default,
        inputs: formProps.inputs,
        modelValue: state,
      },
    });

    // cy.dataCy('button').should('contain', 'Submit');
  });

});
