import { TEXT_INPUT, SLIDER_INPUT, DROPDOWN_INPUT } from './inputTypes.js'

const LANGUAGE_OPTIONS = [
    {
        value: 'en',
        label: 'English'
    }, {
        value: 'fr',
        label: 'French'
    }, {
        value: 'de',
        label: 'German'
    }, {
        value: 'it',
        label: 'Italian'
    }, {
        value: 'ru',
        label: 'Russian'
    }, {
        value: 'uk',
        label: 'Ukrainian'
    },
];

export default [{
    classes: 'form-control',
    name: 'name',
    label: 'Dictionary Name',
    placeholder: 'Dictionary Name',
    inputType: TEXT_INPUT,
}, {
    classes: 'form-control',
    name: 'input_lang',
    label: 'Input Language',
    inputType: DROPDOWN_INPUT,
    options: LANGUAGE_OPTIONS,
}, {
    classes: 'form-control',
    name: 'output_lang',
    label: 'Output Language',
    inputType: DROPDOWN_INPUT,
    options: LANGUAGE_OPTIONS,
}, {
    classes: 'form-control',
    name: 'time_before_translation',
    label: 'Time Before',
    min: 1,
    max: 5000,
    inputType: SLIDER_INPUT,
    postfix: 'ms',

}, {
    classes: 'form-control',
    name: 'time_between_translations',
    label: 'Time Between',
    min: 1,
    max: 5000,
    inputType: SLIDER_INPUT,
    postfix: 'ms',
}]