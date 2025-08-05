const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.elements['delay'];
  const stateInput = form.elements['state'];

  const delay = Number(delayInput.value);
  const state = stateInput.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
