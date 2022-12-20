import { Observable } from '@nativescript/core';
import { ObservableArray } from '@nativescript/core';
export function lists() {
  var vm = new Observable();
  var listArray = new ObservableArray();
  listArray.push({
    tex: 'Hello',
  });
  vm.set('list', listArray);
  return vm;
}
