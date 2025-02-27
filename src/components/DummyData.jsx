export const dataset = [  // dummy data needs to be changed
  {
    java: 9,
    html: 7,
    js: 6,
    react: 2,
    student: 'John Doe',
  },
  {
    java: 5,
    html: 2,
    js: 8,
    react: 8,
    student: 'Anne Joe',
  },
  {
    java: 7,
    html: 3,
    js: 6,
    react: 4,
    student: 'Bri M',
  },
  {
    java: 4,
    html: 5,
    js: 9,
    react: 3,
    student: 'Nick B',
  },
  {
    java: 7,
    html: 6,
    js: 2,
    react: 9,
    student: 'Mark S',
  },
];

export function valueFormatter(value) {
  return `${value} days`;
}
