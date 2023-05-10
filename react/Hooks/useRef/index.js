////// sample 1 
const myRef = useRef(1)
myRef.current = 12
console.log(myRef) /// 12

//////////

import { useRef } from 'react';

export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>
      You clicked {countRef.current} times
    </button>
  );
}

///////////  Sample 2 

/**
 * Step 1 : 
 * You passed a ref to the another component , this action cause a warning , React doesn't allow you to 
 * from a component access to another DOM node of component so we should use another way , in the step 2 : 
 */
function MyInput(props) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

/**
 * Step 2 : 
 * For solving this problem you should use forwardRef
 */
  const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
  });

  /**
   * Step 3:
   * In some cases you want to restrict the the exposed functionality
   */

  const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
      // Only expose focus and nothing else
      focus() {
        realInputRef.current.focus();
      },
    }));
    return <input {...props} ref={realInputRef} />;
  });
  
  export default function Form() {
    const inputRef = useRef(null);
  
    function handleClick() {
      inputRef.current.focus();
    }
  
    return (
      <>
        <MyInput ref={inputRef} />
        <button onClick={handleClick}>
          Focus the input
        </button>
      </>
    );
  }
///////////