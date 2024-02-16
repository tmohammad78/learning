function log(data) {
    console.log(data)
}
//// 1. at function
const arr = [1,2,3,4,5]

log(arr.at(1))   //// 2
log(arr.at(-1)) /// 5
// https://github.com/tc39/proposal-relative-indexing-method?tab=readme-ov-file


///////// 2. Error.cause

/**
 * with this feature you can pass the original error data with the message 
 */

// https://medium.com/ovrsea/power-up-your-node-js-debugging-and-error-handling-with-the-new-error-cause-feature-4136c563126a


const apiFetch = async (objectName) => {
    await fetch(url + "/" + objectName);
  };
  
  const main = async () => {
    try {
      await apiFetch(foo);
    } catch (error) {
      throw new Error("An error has occured while trying to fetch foo", {
        cause: error,
      });
    }
  
    try {
      await apiFetch(bar);
    } catch (error) {
      throw new Error("An error has occured while trying to fetch bar", {
        cause: error,
      });
    }
  };
/// Result of error 
/**
 *  Error: An error has occured while trying to fetch foo
   [cause]: Error: 401 - Unauthorized - Token Expired
 */

//// 3. top level await for module
/**
 * You can load async module with await to load dynamic modules 
 */

const params = new URLSearchParams(location.search);
const language = params.get('lang');
const messages = await import(`./messages-${language}.mjs`); // (A)

console.log(messages.welcome);

//// 4. hasOwn 
/// The difference between hasOwnProperty is that 
/// hasOwnPrporty doesn't work in object that created in object.create

const obj  = Object.create(null)
obj.person = "Mohammad"

log(Object.hasOwn(obj,'person')) /// true
log(obj.hasOwnProperty('person')) /// throw error, it have no hasOwnProperty


//////////
