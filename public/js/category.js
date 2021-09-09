const updateCategory = async (event) => {
  event.preventDefault();
  
  const category_name = document.querySelector('#cate-name').value.trim();
  const dataId = document.querySelector('.cate-input').getAttribute('data-cate');
  
  if (category_name) {
    const response = await fetch(`/api/categories/${dataId}`, {
      method: 'PUT',
      body: JSON.stringify({ category_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create create');
    }
  }
};

const deleteCategory = async (event) => {
  event.preventDefault();
  const dataId = document.querySelector('.cate-input').getAttribute('data-cate');
  
  const response = await fetch(`/api/categories/${dataId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/category');
  } else {
    alert('Failed to create create');
  }
};

document
  .querySelector("#cate-up")
  .addEventListener("click",updateCategory);

document
  .querySelector("#cate-del")
  .addEventListener("click",deleteCategory);