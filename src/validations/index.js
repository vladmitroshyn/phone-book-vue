import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import {
  isPossiblePhoneNumber,
  // isValidPhoneNumber,
  // validatePhoneNumberLength
} from 'libphonenumber-js';

extend('required', {
  ...required,
  message: 'The field is required.',
});

extend('onlyLetters', {
  validate: (value) => /^[a-zA-Z]+$/.test(value),
  message: 'Only letters is possible.',
});

extend('startsWithCapital', {
  validate: (value) => /[A-Z]/.test(value.charAt(0)),
  message: 'The first letter must be uppercase.',
});

extend('atLeastTwoLetters', {
  validate: (value) => value.length >= 2,
  message: 'Must be at least two letters.',
});

extend('possiblePhoneNumber', {
  validate: (value) => isPossiblePhoneNumber(value),
  message: 'Don\'t possible phone number.',
});

extend('validEmail', {
  validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
  message: 'Invalid email address.',
});

export { ValidationObserver, ValidationProvider };
