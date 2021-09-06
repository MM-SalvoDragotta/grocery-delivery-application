
const updateProduct = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  const category_id = document.querySelector('#category').value.trim();
  if(document.querySelector('#special').checked){
    isSpecial = true
  }else{
    isSpecial = false
  }
  const dataId = document.querySelector('.update-form').getAttribute('id');
    const response = await fetch(`/api/products/${dataId}`, {
      method: 'PUT',
      body: JSON.stringify({ name, price ,stock , category_id, isSpecial}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed');
    }
  
};
const deleteProduct = async (event) => {
  event.preventDefault();
  
  const dataId = document.querySelector('.update-form').getAttribute('id');
    const response = await fetch(`/api/products/${dataId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed ');
    }
  
};
document
  .querySelector('.update-form')
  .addEventListener('submit', updateProduct);
  document
  .querySelector('#delete')
  .addEventListener('click', deleteProduct);