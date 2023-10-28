//// before you have a function that cheeck the discount and return a price
// If we want to add another one, we should change the function
/// it means we are modefying the function

function calculatePrice(price, discount) {
  if (discount === '10%') {
    return price * 0.9;
  } else if (discount === '20%') {
    return price * 0.8;
  } else if (discount === '30%') {
    return price * 0.7;
  } else {
    throw new Error('Invalid discount');
  }
}

const discountedPrice = calculatePrice(100, '10%');
console.log(`Your discounted price is ${discountedPrice}`); 

/**
 * After
 * In this code, we see it's better to add just one property to the object
 */
const discounts = {
  '10%': 0.9,
  '20%': 0.8,
  '30%': 0.7,
};

function calculatePrice(price, discountType) {
  const discount = discounts[discountType];
  if (discount === undefined) {
    throw new Error('Invalid discount');
  }
  return price * discount;
}

const discountedPrice = calculatePrice(100, '30%');
console.log(`Your discounted price is $${discountedPrice}`);

//////////////////////////////////////////////

// <<<<<<<<<<<<<<<<<<<<<<<< In React Sample >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

//before: You see that isLoading changes the compoennt 
function Button({ text, isLoading }: ButtonProps) {
  if (isLoading) {
    return <svg>...</svg>;
  }

  return <button>{text}</button>;
}

function App() {
  return <Button text="Click me!" isLoading={true} />;
}

///// After
/// You dont change the main component, just you create a new component and import it in parent component

function Loading({ isLoading, children }: LoadingProps) {
  return isLoading ? <svg>...</svg> : children;
}

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function App() {
  return (
    <Loading isLoading={true}>
      <Button text="Click me!" />
    </Loading>
  );
}