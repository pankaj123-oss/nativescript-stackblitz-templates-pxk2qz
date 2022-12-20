import lists from './main-view-model';
const li = lists();
export function onNavigatingTo(args) {
  const page = args.object;
  console.log('Hello');
  page.bindingContext = li;
}
