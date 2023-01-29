import { useCallback, useReducer, useState } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import { reducer } from "../lib/reducer";
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  // const [items, setItems] = useState(getInitialItems());
  // const [newItemName, setNewItemName] = useState(''); /// This is wrong because we are couple parent component to state of child

  // we can use useReducer and redux for handling this : 
  const [items,dispatch ] = useReducer(reducer,getInitialItems())
  // const add = useCallback((name) => {
  //   const item = createItem(name);
  //   setItems([...items, item]);
  // },[items])
  
  // const update = useCallback((id, updates) => {
  //   setItems(updateItem(items, id, updates));
  // },[items]);

  // const remove = useCallback((id) => {
  //   setItems(removeItem(items, id));
  // },[items]);
  
  // const markAllAsUnpacked = useCallback(() => {
  //   return setItems(items.map((item) => ({ ...item, packed: false })));
  // },[items]);

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header items={items} />
      <NewItem
        // newItemName={newItemName}
        // setNewItemName={setNewItemName}
        dispatch={dispatch}
      />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          dispatch={dispatch}
          // update={update}
          // remove={remove}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          dispatch={dispatch}
          // update={update} 
          // remove={remove}
        />
      </section>
      <MarkAllAsUnpacked dispatch={dispatch} />
    </main>
  );
};

export default Application;
