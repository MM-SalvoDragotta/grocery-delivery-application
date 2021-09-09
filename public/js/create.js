const createproduct = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  const category_id = document.querySelector('#category').value.trim();
  const file = document.querySelector('#upload-file').files[0];

  const file64 =  await toBase64(file);

  if(document.querySelector('#special').checked){
    isSpecial = true
  }else{
    isSpecial = false
  }
 
  if (name && price && stock && category_id) {
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price ,stock , category_id, isSpecial, file64}),
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

//https://stackoverflow.com/questions/6926016/how-can-i-save-a-base64-encoded-image-to-disk
//https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

document.querySelector('.create-form').addEventListener('submit', createproduct)
