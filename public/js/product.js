
const updateProduct = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  const category_id = document.querySelector('#category').value.trim();
  const file = document.querySelector('#upload-file').files[0] || undefined;
  let product = {}

  if(document.querySelector('#special').checked)
  {
    isSpecial = true
    special.setAttribute('checked', 'checked');
  }else{
    isSpecial = false
    special.checked = false
    special.removeAttribute('checked');  
  }

  const dataId = document.querySelector('.update-form').getAttribute('id');

  if (file!=undefined) {
    const file64 =  await toBase64(file);
    product = {
      name,
      price ,
      stock , 
      category_id, 
      isSpecial , 
      file64
    }
  }else {
   product = {
        name,
        price ,
        stock , 
        category_id, 
        isSpecial 
      }
    }
     

const response = await fetch(`/api/products/${dataId}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // document.location.replace('/category');
      // window.history.back();
      window.location.replace(document.referrer)
    } else {
      alert('Failed');
    }  
};

//https://stackoverflow.com/questions/6926016/how-can-i-save-a-base64-encoded-image-to-disk
//https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});


document
  .querySelector('.update-form')
  .addEventListener('submit', updateProduct);
