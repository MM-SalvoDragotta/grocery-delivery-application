const createCategory = async (event) => {
  event.preventDefault();
  const category_name = document.querySelector('put name element here').value.trim();
 
  if (category_name) {
    const response = await fetch(`/api/categories`, {
      method: 'POST',
      body: JSON.stringify({ category_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create create');
    }
  }
};

const updateCategory = async (event) => {
  event.preventDefault();
  
  const category_name = document.querySelector('put name element here').value.trim();
  const dataId = document.querySelector('put id element here').getAttribute('data-id');
  
  if (category_name) {
    const response = await fetch(`/api/categories/${dataId}`, {
      method: 'PUT',
      body: JSON.stringify({ category_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create create');
    }
  }
};

const deleteCategory = async (event) => {
  event.preventDefault();
  const dataId = document.querySelector('put id element here').getAttribute('data-id');
  
  const response = await fetch(`/api/categories/${dataId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to create create');
  }
};