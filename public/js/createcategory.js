const createCategory = async (event) => {
  event.preventDefault();
  const category_name = document.querySelector('#cate-name').value.trim();
 
  if (category_name) {
    const response = await fetch(`/api/categories`, {
      method: 'POST',
      body: JSON.stringify({ category_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/category');
    } else {
      alert('Failed to create create');
    }
  }
};

document
  .querySelector(".create-form")
  .addEventListener("submit", createCategory)