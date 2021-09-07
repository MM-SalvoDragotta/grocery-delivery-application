const createproduct = async (event) => {
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
 
  if (name && price && stock && category_id) {
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price ,stock , category_id, isSpecial}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/category');
    } else {
      alert('Failed');
    }
  }
};

document.querySelector('.create-form').addEventListener('submit', createproduct)
