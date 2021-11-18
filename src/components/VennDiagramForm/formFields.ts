

// export enum FormFieldKeys {
//   NAME = 'name',
//   JOY = 'joy',
//   MAGIC = 'magic',
//   SOLUTIONS = 'solutions',
//   OVERLAP = 'overlap',
// }

export type FieldKeyType = 'name' | 'joy' | 'magic' | 'solutions' | 'overlap';
export type FormFields = { [key in FieldKeyType]: FormField };

export interface FormField {
  id: FieldKeyType;
  label: string;
  placeholder: string;
  value: string;
}

export const formFields: FormField[] = [
  {
    id: 'name',
    label: 'Your name',
    placeholder: 'Any name you want to give us.',
    value: '',
  },
  {
    id: 'joy',
    label: 'What brings you joy?',
    placeholder: 'What gets you up in the morning?',
    value: '',
  },
  {
    id: 'magic',
    label: 'What are you good at?',
    placeholder: 'Your special skills, network, resources & magic',
    value: '',
  },
  {
    id: 'solutions',
    label: 'What is the work that needs doing?',
    placeholder: 'Climate and justice solutions.',
    value: '',
  },
  {
    id: 'overlap',
    label: 'What can I do?',
    placeholder: 'What can I bring to the table?',
    value: '',
  },
];

// export const formFields: FormFields = {
//   name: {
//     id: 'name',
//     label: 'Your name',
//     placeholder: 'Any name you want to give us.',
//     value: '',
//   },
//   joy: {
//     id: 'joy',
//     label: 'What brings you joy?',
//     placeholder: 'What gets you up in the morning?',
//     value: '',
//   },
//   magic: {
//     id: 'magic',
//     label: 'What are you good at?',
//     placeholder: 'Your special skills, network, resources & magic',
//     value: '',
//   },
//   solutions: {
//     id: 'solutions',
//     label: 'What is the work that needs doing?',
//     placeholder: 'Climate and justice solutions.',
//     value: '',
//   },
//   overlap: {
//     id: 'overlap',
//     label: 'What can I do?',
//     placeholder: 'What can I bring to the table?',
//     value: '',
//   },
// };


